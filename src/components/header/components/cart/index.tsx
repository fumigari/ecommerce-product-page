import React from "react";
import "./index.css";
import avatarProfile from "../../../../images/image-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC = (): JSX.Element => {
  return (
    <ul role="list" className="list">
      <li role="menuitem">
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
      </li>
      <li role="menuitem">
        <FontAwesomeIcon icon={faCircleUser} size="2x" />
      </li>
    </ul>
  );
};

export default Cart;
