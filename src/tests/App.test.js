import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders users link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Users/i);
  expect(linkElement).toBeInTheDocument();
});
