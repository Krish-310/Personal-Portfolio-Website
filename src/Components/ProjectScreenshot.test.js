import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProjectScreenshot } from './ProjectScreenshot';

test('opens a labelled screenshot, closes with Escape, and returns focus', async () => {
  render(<ProjectScreenshot src="/screenshot.png" alt="Process Monitor screenshot" />);
  const trigger = screen.getByRole('button', { name: 'Enlarge Process Monitor screenshot' });
  trigger.focus();
  fireEvent.click(trigger);
  const dialog = await screen.findByRole('dialog', { name: 'Process Monitor screenshot' });
  expect(dialog).toContainElement(screen.getByRole('heading', { name: 'Process Monitor screenshot' }));
  fireEvent.keyDown(dialog, { key: 'Escape', code: 'Escape', keyCode: 27 });
  await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  expect(trigger).toHaveFocus();
});
