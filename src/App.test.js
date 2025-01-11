import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kickstarter Projects header', () => {
  render(<App />);
  const headerElement = screen.getByText(/SaaS Labs - Kickstarter Projects/i); // Actual text in your app
  expect(headerElement).toBeInTheDocument();
});
