import React from "react";
import { Link } from "react-router-dom";
import css from "./ItemsNav.module.css"

export const ItemsNav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/form">Form</Link></li>
      </ul>
    </nav>
  );
};
