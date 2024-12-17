import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders widget title', () => {
  render(<App />);
  const heading = screen.getByText(/select items/i, { exact: false });
  expect(heading).toBeInTheDocument();
});
