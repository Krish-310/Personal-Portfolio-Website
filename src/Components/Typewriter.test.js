import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Typewriter } from './Typewriter';

let preference;
let motionListeners;
let visibility;
const originalMatchMedia = window.matchMedia;
const tick = () => act(() => jest.advanceTimersToNextTimer());

beforeEach(() => {
  jest.useFakeTimers();
  motionListeners = new Set();
  preference = {
    matches: false,
    addEventListener: (_type, listener) => motionListeners.add(listener),
    removeEventListener: (_type, listener) => motionListeners.delete(listener),
  };
  window.matchMedia = jest.fn(() => preference);
  visibility = jest.spyOn(document, 'visibilityState', 'get').mockReturnValue('visible');
});
afterEach(() => {
  cleanup();
  visibility.mockRestore();
  window.matchMedia = originalMatchMedia;
  jest.useRealTimers();
});

test('types and erases through the full rotation without leaving timers behind', () => {
  const { container, unmount } = render(<Typewriter />);
  const text = () => container.querySelector('.typewriter-live').textContent;
  expect(text()).toBe('|');
  for (let i = 0; i < 'software engineer'.length; i++) tick();
  expect(text()).toBe('software engineer|');
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  for (const word of ['systems enthusiast', 'researcher', 'speedcuber', 'software engineer']) {
    for (let i = 0; i < 50 && text() !== `${word}|`; i++) tick();
    expect(text()).toBe(`${word}|`);
  }
  unmount();
  expect(jest.getTimerCount()).toBe(0);
  expect(motionListeners.size).toBe(0);
});

test('uses static text for reduced motion and responds to preference changes', () => {
  preference.matches = true;
  const { container } = render(<Typewriter />);
  expect(container.querySelector('.typewriter-live')).toHaveTextContent('software engineer|');
  expect(screen.queryByRole('button')).not.toBeInTheDocument();
  expect(jest.getTimerCount()).toBe(0);
  act(() => {
    preference.matches = false;
    motionListeners.forEach(listener => listener());
  });
  tick();
  expect(container.querySelector('.typewriter-live')).toHaveTextContent('s|');
  act(() => {
    preference.matches = true;
    motionListeners.forEach(listener => listener());
  });
  expect(container.querySelector('.typewriter-live')).toHaveTextContent('software engineer|');
  expect(jest.getTimerCount()).toBe(0);
});

test('suspends animation in a hidden tab and resumes when visible', () => {
  const { container } = render(<Typewriter />);
  tick();
  visibility.mockReturnValue('hidden');
  fireEvent(document, new Event('visibilitychange'));
  act(() => jest.advanceTimersByTime(10000));
  expect(container.querySelector('.typewriter-live')).toHaveTextContent('s|');
  expect(jest.getTimerCount()).toBe(0);
  visibility.mockReturnValue('visible');
  fireEvent(document, new Event('visibilitychange'));
  tick();
  expect(container.querySelector('.typewriter-live')).toHaveTextContent('so|');
});
