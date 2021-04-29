import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const text = screen.getByText(/Choose from a number of different categories and the number of questions you want to have./i);
  expect(text).toBeInTheDocument();
});