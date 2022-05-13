import React from "react";
import "./index.css";
import MenuItems from './components/menu-items';
import Logo from "./components/logo";
import Cart from "./components/cart";
import SearchBar from "./components/search-bar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__search">
        <Logo />
        <SearchBar />
        <Cart />
      </div>
      <MenuItems />
    </header>
  );
};

export default Header;
