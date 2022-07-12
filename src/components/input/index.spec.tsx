import {
  faCartShopping,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Input from ".";
import React from "react";
import { render, screen } from "@testing-library/react";

describe("<Input />", () => {
  const renderInput = ({
    name = "",
    icon = faCartShopping,
    placeholder = "",
    errorMessage = "",
    id = "",
    label = "",
    isRequired = false,
  }: {
    name?: string;
    icon?: IconDefinition;
    placeholder?: string;
    errorMessage?: string;
    id?: string;
    label?: string;
    isRequired?: boolean;
  }) => {
    render(
      <Input
        name={name}
        icon={icon}
        placeholder={placeholder}
        errorMessage={errorMessage}
        id={id}
        onInputData={jest.fn()}
        label={label}
        isRequired={isRequired}
      />
    );
  };
  test("Should render placeholder", () => {
    renderInput({ name: "", placeholder: "o que está acontecendo?" });
    const result = screen.getByPlaceholderText("o que está acontecendo?");

    expect(result).toBeInTheDocument();
  });

  test("Should render icon", () => {
    renderInput({ icon: faCartShopping, id: "input" });
    const result = screen.getByTestId("input");

    expect(result).toBeInTheDocument();
  });

  test("Should render label", () => {
    renderInput({ name: "input-test", label: "Test", id: "input-test" });
    const result = screen.getByLabelText("Test");

    expect(result).toBeInTheDocument();
  });

  test("Should render error message when isRequired is true", () => {
    renderInput({ name: "input", isRequired: true, errorMessage: "Error" });
    const result = screen.getByText("Error");

    expect(result).toBeInTheDocument();
  });
});
