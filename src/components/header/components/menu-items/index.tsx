import React from "react";
import "./index.css";

const MenuItems: React.FC = (): JSX.Element => {
  return (
    <ul role="list" className="menu">
      <li className="menu__items">Collections</li>
      <li className="menu__items">Men</li>
      <li className="menu__items">Women</li>
      <li className="menu__items">About</li>
      <li className="menu__items">Contact</li>
    </ul>
  );
};

export default MenuItems;
