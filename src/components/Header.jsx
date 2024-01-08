import React, { useState } from "react";
import logo from "../assets/images/kuehne-nagel-logo-blue.png";
import close from "../assets/images/close.svg";
import s from "./Header.module.css"

function Header() {
  const [isActive, setIsActive] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (

    <header className={s.header}>
      <div className="container">
        <div className={s.header__inner}>
          <img className={s.logo__img} src={logo} alt="Logo of Kuehne+Nagel"></img>
          <div className={s.title}>
            <h1 className={s.title__name}>Assessment work</h1>
            <p className={s.title__author}>created by Aleksandr Lissovski</p>
          </div>
          <button className={s.task_btn} onClick={toggleActive}>
            Task
          </button>
          <div className={`${s.task} ${isActive ? s.hidden : ''}`}>
            <button className={s.task__close_btn} onClick={toggleActive}>
              <img src={close} alt="close"/>
            </button>

            <p>Shipments CRUD page:

            </p>
            <p>Create an HTML Page with relevant Javascript to:</p>

            <ul>
              <li>Load shipments data with AJAX from https://my.api.mockaroo.com/shipments.json?key=5e0b62d0
                (Note that that link might get overloaded, so you can also use off line version renaming shipment.txt file)</li>
              <li>Display data in generated table (see attachment ShipmentsTable.png as example)</li>
              <li>Provide a button in the table to open a panel to visualize details of single row (see attachment ShipmentsDetails.png as example)</li>
            </ul>
            <p>TECH:</p>

            <ul>
              <li>You can implement it with vanilla javascript</li>
              <li>More points if you implement it with React</li>
            </ul>

            <p>BENEFICIAL ADDITIONAL POINTS:</p>

            <ul>
              <li>Use one CSS template (for example get some from here: https://www.creative-tim.com/templates/free)</li>
              <li>Implement delete button on the table</li>
              <li>Implement update on Details panel (field values could be changed in the UI)</li>
              <li>Use Axios</li>
              <li>Use React + Redux</li>
              <li>Use React + Redux + Thunk middleware</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;