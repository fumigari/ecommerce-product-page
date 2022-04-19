import React from "react";
import styles from "./index.module.css";
import MenuItems from './components/menu-items';
import Logo from "./components/logo";
import Cart from "./components/cart";

const Header: React.FC = () => {
  return (
    <header className={styles.appHeader}>
      <Logo />
      <MenuItems />
      <Cart />
    </header>
  );
};

export default Header;
