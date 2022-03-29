import React from "react";
import "./index.css";
import iconCart from "../../../../images/icon-cart.svg";
import avatarProfile from "../../../../images/image-avatar.png";

const Cart: React.FC = (): JSX.Element => {
  return (<ul role="list" className="list">
    <li>
        <img src={iconCart} alt="ícone carrinho de compras"/>
    </li>
    <li>
        <img
          src={avatarProfile}
          alt="imagem de perfil da usuária"
          className="list__avatar"
        />
    </li>
  </ul>);
}

export default Cart;