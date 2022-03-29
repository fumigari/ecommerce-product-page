import {render, screen} from "@testing-library/react";
import Cart from "./index";

describe("<Cart />", () => {

  test("Should render cart component", () => {
    render(<Cart/>);

    const result = screen.queryByRole("list");
    expect(result).toBeInTheDocument();
  });

  test("Should render cart icon", () => {
    render(<Cart/>);

    const result = screen.queryByAltText("ícone carrinho de compras");
    expect(result).toBeInTheDocument();
  });

  test("Should render user icon", () => {
      render(<Cart/>);

      const result = screen.queryByAltText("imagem de perfil da usuária");
      expect(result).toBeInTheDocument();
  });
});