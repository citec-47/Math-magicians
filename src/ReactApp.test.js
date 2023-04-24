/* eslint-disable linebreak-style */
import { render, screen } from '@testing-library/react';
import App from './ReactApp';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
