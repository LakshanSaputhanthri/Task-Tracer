import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>Copyrights & 2022 </p>
      <Link to="./About">About</Link>
    </footer>
  );
};

export default Footer;
