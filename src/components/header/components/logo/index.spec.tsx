import {render, screen} from "@testing-library/react";
import Logo from "./index";

describe ("<Logo />", () => {
   test("should render logo", () => {
      render(<Logo />);

      const result = screen.queryByAltText('sneakers logo');
      expect(result).toBeInTheDocument();
   });
});