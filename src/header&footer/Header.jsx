import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left ">
        <Link className="header__link title-text" to="/">
          <img src="assets/logo.png" width={"50px"} alt="Logo" /></Link>
          <div className="header__links ">
            <Link className="header__link title-text " to="/">Home</Link>
            <Link className="header__link title-text" to="calculator">Calculator</Link>
            <Link className="header__link title-text" to="chart">Table</Link>
          </div>
        </div>
        <div className="header__right"></div>
      </div>
    </>
  );
};

export default Header;
