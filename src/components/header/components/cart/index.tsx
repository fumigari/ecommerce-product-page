import React, { useContext } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../../../context/cart-context";

const Cart: React.FC = (): JSX.Element => {
  const { counter } = useContext(CartContext);
  return (
    <ul role="list" className="list">
      <li role="menuitem">
        <div className="menu__item--cart-wrapper">
          <span className="menu__item--cart-counter">{counter}</span>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
        </div>
      </li>
      <li role="menuitem">
        <FontAwesomeIcon icon={faCircleUser} size="2x" />
      </li>
    </ul>
  );
};

export default Cart;
