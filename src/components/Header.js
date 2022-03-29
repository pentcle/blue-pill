import React from "react";
import {Link} from "react-router-dom";

const Header = ({children}) => {
    return (<header><Link to="/" id={"home"}><img src={children} alt="yfi story" name="home"/></Link></header>);
};

export default Header;
