import React, { createContext, ReactNode, useState } from "react";

type CartContextType = {
  counter: number;
  setCounter: (counter: number) => any;
};

export const CartContext = createContext<CartContextType>({
  counter: 0,
  setCounter: (counter: number) =>
    console.error("Função de setCounter não implementada"),
});

export const CartProvider: React.FC<ReactNode> = ({ children }): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <CartContext.Provider value={{ counter, setCounter }}>
      {children}
    </CartContext.Provider>
  );
};