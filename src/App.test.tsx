import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Dialog/Dialog', () => () => '<Dialog />');

describe('<App />', () => {
  test('renders widget title', () => {
    render(<App />);
    const heading = screen.getByText(/select items/i, { exact: false });
    expect(heading).toBeInTheDocument();
  });

  test('shows dialog on button click', () => {
    render(<App />);
    const button = screen.getByText(/change my choice/i);
    fireEvent.click(button);
    const dialog = screen.getByText(/dialog/i);
    expect(dialog).toBeInTheDocument();
  });
});