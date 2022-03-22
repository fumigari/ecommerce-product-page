import React from "react";
import logomarca from "../../images/logomarca.svg";
import iconCart from "../../images/icon-cart.svg";
import avatarProfile from "../../images/image-avatar.png";
import styles from "./index.module.css";
import MenuItems from './components/menu-items';

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <img src={logomarca} alt="sneakers logo" />
      <MenuItems />
      <ul className={`${styles.listWrapper} ${styles.cartAndIcon}`}>
        <li>
          <a>
            <img src={iconCart} alt="ícone carrinho de compras" />
          </a>
        </li>
        <li>
          <a>
            <img
              src={avatarProfile}
              alt="imagem de perfil da usuária"
              className={styles.avatar}
            />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
