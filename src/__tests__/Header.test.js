import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import '@testing-library/jest-dom';


describe('Header componet', () => {
  test('should render heading', () => {  
    render(<Header />)
    const  heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test("header text should have heading", () => {
    render(<Header />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("React Testing Header")
  })
})