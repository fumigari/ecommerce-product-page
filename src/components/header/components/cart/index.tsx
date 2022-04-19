import React from "react";
import "./index.css";
import avatarProfile from "../../../../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Cart: React.FC = (): JSX.Element => {
  return (<ul role="list" className="list">
    <li>
        <FontAwesomeIcon icon={faCartShopping} size="2x"/>
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