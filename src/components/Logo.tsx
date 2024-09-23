import React from "react";
import logo from "../assets/logo.png";

const Logo: React.FC<{ small?: boolean }> = ({ small = false }) => {
  const className = small == true ? "w-[50px] md:w-[60px]" : "w-[80px] md:w-[100px]";
  return <img src={logo} className={className} />;
};

export default Logo;
