import React from "react";
import logomarca from "./images/logomarca.svg";
import iconCart from "./images/icon-cart.svg";
import avatarProfile from "./images/image-avatar.png";
import styles from "./App.module.css";

function App() {
  return (
    <header className={styles.appHeader}>
      <img src={logomarca} alt="sneakers logo" />
      <ul className={styles.list}>
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
        <li>
          <a>
            <img src={iconCart} alt="ícone carrinho de compras" />
          </a>
        </li>
        <li>
          <a>
            <img src={avatarProfile} alt="imagem de perfil da usuária" />
          </a>
        </li>
        <li></li>
      </ul>
    </header>
  );
}

export default App;
