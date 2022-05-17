import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Input from ".";
import React from "react";
import { render, screen } from "@testing-library/react";

describe('<Input />', () => {
  test('Should render placeholder', () => {
    render(<Input name="" placeholder="o que está acontecendo?"/>);
    const result = screen.getByPlaceholderText("o que está acontecendo?");

    expect(result).toBeInTheDocument();
  });

  test('Should render icon', () => {
    render(<Input name="" icon={faCartShopping} id="input"/>);
    const result = screen.getByTestId("input");

    expect(result).toBeInTheDocument();
  });

  test('Should render label', () => {
    render(<Input name="input-test" label="Test" id="input"/>);
    const result = screen.getByLabelText("Test");

    expect(result).toBeInTheDocument();
  });

  test('Should render error message when isRequired is true', () => {
    render(<Input name="input" isRequired={true} errorMessage="Error"/>);
    const result = screen.getByText("Error");

    expect(result).toBeInTheDocument();
  });
});