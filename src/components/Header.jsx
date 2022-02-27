import React from "react";
import { CgNotes } from "react-icons/cg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <CgNotes size={28} />
        <h1>
          Note<span>App</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;
