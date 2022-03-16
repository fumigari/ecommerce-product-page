import { render } from "@testing-library/react";
import Item from ".";

describe("<Item />", () => {
  test("render item", () => {
    const { container } = render(<Item />);
    const result = container.querySelector("li");

    expect(result?.textContent).toBe("");
  });
});
