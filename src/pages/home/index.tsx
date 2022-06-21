import React, { useContext } from "react";
import Header from "../../components/header";
import { CartContext } from "../../context/cart-context";

const Home: React.FC = () => {
  let { counter, setCounter } = useContext(CartContext);
  return (
    <>
      <Header />
      <button onClick={()=> setCounter(counter + 1)}>Atualizar carrinho</button>
    </>
  );
};

export default Home;
