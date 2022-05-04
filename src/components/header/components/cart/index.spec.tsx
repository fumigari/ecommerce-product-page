import {render, screen} from "@testing-library/react";
import React from "react";
import Cart from "./index";

describe("<Cart />", () => {

  test("Should render cart component", () => {
    render(<Cart/>);

    const result = screen.queryByRole("list");
    expect(result).toBeInTheDocument();
  });

  test("Should render cart icons", () => {
    render(<Cart/>);

    const result = screen.getAllByRole("menuitem");
    expect(result).toHaveLength(2);
  });
});