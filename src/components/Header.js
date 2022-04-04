import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/yearn-logo.svg";

const Header = () => {
    return (<header><Link to="/" id={"home"}><img src={logo} className="logo" alt="yfi story" name="home"/></Link></header>);
};

export default Header;
