import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Student-153386709997/i);
  expect(linkElement).toBeInTheDocument();
});
