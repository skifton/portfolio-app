import React from "react";
import NavBar from "../NavBar";

const Header: React.FC = () => {
  return (
    <header
      className={`h-32 max-w-screen-xl mx-5 xl:mx-auto flex items-center`}
    >
      <NavBar />
    </header>
  );
};

export default Header;
