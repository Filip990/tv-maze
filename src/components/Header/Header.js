import React from "react";
import "./Header.css";

import Input from "../Input/Input";

const Header = props => {
  return (
    <div className="header">
      <h1>TvMaze</h1>
      <Input placeholder="Search TV Shows" />
    </div>
  );
};

export default Header;
