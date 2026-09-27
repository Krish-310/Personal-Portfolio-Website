import { act, fireEvent, render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import App from './App';
import { Contact } from './Components/Contact';

jest.mock('@emailjs/browser', () => ({ send: jest.fn() }));
const originalEnv = { ...process.env };

beforeEach(() => {
  window.scrollTo = jest.fn();
  emailjs.send.mockReset();
  process.env.REACT_APP_EMAILJS_SERVICE_ID = 'test-service';
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID = 'test-template';
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY = 'test-public-key';
});
afterEach(() => { process.env = { ...originalEnv }; });

const fillContact = () => {
  fireEvent.click(screen.getByRole('button', { name: 'Use the contact form' }));
  fireEvent.change(screen.getByLabelText('Your name'), { target: { value: 'Test Visitor' } });
  fireEvent.change(screen.getByLabelText('Email address'), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: 'An interesting project.' } });
};

test('navigation reflects the route and returns to the homepage', () => {
  render(<MemoryRouter initialEntries={['/projects']}><App /></MemoryRouter>);
  const navigation = screen.getByRole('navigation');
  expect(within(navigation).getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('heading', { name: 'Earlier projects' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Screenshots on GitHub/ })).toHaveAttribute('href', 'https://github.com/Krish-310/RAIInet-public');
  fireEvent.click(within(navigation).getByRole('link', { name: 'Home', exact: true }));
  expect(screen.getByRole('heading', { name: /Hi, I'm Krish/ })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(3);
  expect(within(navigation).getByRole('link', { name: 'Home', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('mobile menu closes on Escape, outside interaction, and navigation', () => {
  render(<MemoryRouter initialEntries={['/projects']}><App /></MemoryRouter>);
  const navigation = screen.getByRole('navigation');
  const open = () => fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  open();
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveFocus();
  open();
  fireEvent.pointerDown(screen.getByRole('main'));
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  open();
  fireEvent.click(within(navigation).getByRole('link', { name: 'About Me', exact: true }));
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
  expect(within(navigation).getByRole('link', { name: 'About Me', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('contact prevents duplicate sends and resets only after success', async () => {
  let resolveSend;
  emailjs.send.mockImplementation(() => new Promise(resolve => { resolveSend = resolve; }));
  render(<Contact />);
  fillContact();
  const form = screen.getByRole('form', { name: 'Contact Krish' });
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  expect(emailjs.send).toHaveBeenCalledWith('test-service', 'test-template', expect.objectContaining({ from_name: 'Test Visitor', from_email: 'visitor@example.com', message: 'An interesting project.' }), 'test-public-key');
  expect(screen.getByRole('button', { name: /Sending/ })).toBeDisabled();
  await act(async () => resolveSend({ status: 200 }));
  expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent');
  expect(screen.getByLabelText('Your name')).toHaveValue('');
  expect(screen.getByRole('button', { name: /Send message/ })).toBeEnabled();
});

test('failed contact submission keeps the message for retry', async () => {
  emailjs.send.mockRejectedValue(new Error('Service unavailable'));
  render(<Contact />);
  fillContact();
  fireEvent.submit(screen.getByRole('form', { name: 'Contact Krish' }));
  expect(await screen.findByText(/Your message could not be sent/)).toBeInTheDocument();
  expect(screen.getByLabelText("Message")).toHaveValue('An interesting project.');
  expect(screen.getByRole('button', { name: /Send message/ })).toBeEnabled();
});

test('missing email configuration shows an alternative without sending', () => {
  delete process.env.REACT_APP_EMAILJS_SERVICE_ID;
  render(<Contact />);
  fillContact();
  fireEvent.submit(screen.getByRole('form', { name: 'Contact Krish' }));
  expect(emailjs.send).not.toHaveBeenCalled();
  expect(screen.getByRole('status')).toHaveTextContent('Please email me directly');
  expect(screen.getByRole('link', { name: /k2kochar@uwaterloo.ca/ })).toHaveAttribute('href', 'mailto:k2kochar@uwaterloo.ca');
});
