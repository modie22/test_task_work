import React from "react";
import css from "./Header.module.css";
import { ItemsNav } from "components/ItemsNav/ItemsNav";
export const Header = () => {
  return (
    <header className="container">
      <div className={css.container_header}>
        <ItemsNav />
      </div>
    </header>
  );
};
