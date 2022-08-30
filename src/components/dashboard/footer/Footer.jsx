import React from "react";

const Footer = () => {
  return (
    <footer className="pt-5 d-flex justify-content-between">
      <span>
        Copyright © 2019-2020 <a href="https://themesberg.com">Themesberg</a>
      </span>
      <ul className="nav m-0">
        <li className="nav-item">
          <a className="nav-link text-secondary" aria-current="page" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">
            Terms and conditions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
