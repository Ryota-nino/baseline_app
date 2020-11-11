import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images/index";

const HeaderRegister: React.FC = (props) => {
  return (
    <header>
      <h1 className="header-side__logo">
        <Link to="">
          <img src={Logo} alt="" />
        </Link>
      </h1>
    </header>
  );
};

export default HeaderRegister;
