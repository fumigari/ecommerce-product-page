import React from "react";
import logomarca from "../../images/logomarca.svg";
import iconCart from "../../images/icon-cart.svg";
import avatarProfile from "../../images/image-avatar.png";
import styles from "./index.module.css";

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <img src={logomarca} alt="sneakers logo" />
      <ul className={`${styles.listWrapper} ${styles.menuItems}`}>
        <li className={styles.listItem}>
          <a href="">Collections</a>
        </li>
        <li className={styles.listItem}>
          <a href="">Men</a>
        </li>
        <li className={styles.listItem}>
          <a href="">Women</a>
        </li>
        <li className={styles.listItem}>
          <a href="">About</a>
        </li>
        <li className={styles.listItem}>
          <a href="">Contact</a>
        </li>
      </ul>
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
