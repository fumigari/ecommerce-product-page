import { render, screen } from "@testing-library/react";
import React from "react";
import SearchBar from ".";

describe ("<SearchBar/>", () => {
    test("should render search-bar", () => {
    render(<SearchBar />);
    const result = screen.queryByPlaceholderText("O que você está procurando?");
    expect(result).toBeInTheDocument();
  });
}) 