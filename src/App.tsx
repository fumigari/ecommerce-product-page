import React from "react";
import { CartProvider } from "./context/cart-context";
import PageRoutes from "./routes";

function App() {
  return (
    <CartProvider>
      <PageRoutes />
    </CartProvider>
  );
}

export default App;
