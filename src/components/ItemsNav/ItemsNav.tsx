import React from "react";
import { Link } from "react-router-dom";
import css from "./ItemsNav.module.css";

export const ItemsNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link to="/">About me</Link>
        </li>
        <li>
          <Link to="/form">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
