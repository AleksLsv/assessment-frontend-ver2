import React from "react";
import logo from "../assets/images/kuehne-nagel-logo-blue.png";
import s from "./Header.module.css"

function Header() {
  return (

    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <img className={s.logo__img} src={logo} alt="Logo of Kuehne+Nagel"></img>
          <div className={s.title}>
            <h1 className={s.title__name}>Assessment work</h1>
            <p className={s.title__author}>created by Aleksandr Lissovski</p>
          </div>
          <button className={s.task}>Task</button>
        </div>
      </div>
    </header>
  );
}
export default Header;