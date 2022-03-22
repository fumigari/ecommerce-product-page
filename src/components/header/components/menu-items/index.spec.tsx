import { render } from "@testing-library/react";
import Item from ".";

describe("<MenuItems />", () => {
  test("render menu-items", () => {
    const { container } = render(<Item />);
    const result = container.querySelector("li");

    expect(result?.textContent).toBe("");
  });
});
