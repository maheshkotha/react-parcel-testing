import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import '@testing-library/jest-dom';

test('should render heading', () => {

  render(<Header />)

  const  heading = screen.getByRole('heading');

  expect(heading).toBeInTheDocument();

})