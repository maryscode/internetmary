import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('shows my name as the main heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: "Mary Chan" })).toBeInTheDocument();
});


          


test('clicking About shows the about section', async () => {
  const user = userEvent.setup();
  render(<App />);
  const nav = screen.getByRole('navigation');
  await user.click(within(nav).getByRole('button', { name: "About" }));
  expect(screen.getByText("Hello, I'm Mary.")).toBeInTheDocument();
});

