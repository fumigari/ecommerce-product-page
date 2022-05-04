import { render, screen } from "@testing-library/react";
import React from "react";
import MenuItems from ".";

describe("<MenuItems />", () => {
  test("should render menu-items", () => {
    render(<MenuItems />);
    const result = screen.queryByRole("list");
    expect(result).toBeInTheDocument();
  });

  test("should contain 5 list items", () => {
    render(<MenuItems />);
    const result = screen.getByRole("list");
    expect(result.childElementCount).toBe(5);
  });

  test("should have 'Collections' menu item", () => {
    render(<MenuItems />);
    const result = screen.getByText("Collections");
    expect(result).toBeInTheDocument();
  });

  test("should have 'Men' menu item", () => {
    render(<MenuItems />);
    const result = screen.getByText("Men");
    expect(result).toBeInTheDocument();
  });

  test("should have 'Women' menu item", () => {
    render(<MenuItems />);
    const result = screen.getByText("Women");
    expect(result).toBeInTheDocument();
  });

  test("should have 'About' menu item", () => {
    render(<MenuItems />);
    const result = screen.getByText("About");
    expect(result).toBeInTheDocument();
  });

  test("should have 'Contact' menu item", () => {
    render(<MenuItems />);
    const result = screen.getByText("Contact");
    expect(result).toBeInTheDocument();
  });
});
