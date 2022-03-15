import React, { useState, useContext } from "react";
import { Theme } from "../../interface";
import Context from "../../contexts/Context";
import "./Header.scss";

const Header = ({ theme } : Theme) => {
  const Links = () => {
    return (
      <ul>
            <style>
              {`.li a:hover {
                color: ${theme.linkHover};
              }`}
            </style>
        {[
          { name: "Home", link: "/home" },
          { name: "Skills", link: "/skills" },
          { name: "Experience", link: "/experience" },
          { name: "About", link: "/about" },
          { name: "Contact", link: "/contact" },
        ].map((link) => (
          <li key={link.link} className="li">
            <a href={link.link} style={{ color: theme.linkColor }}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  const [menu, toggleMenu] = useState(false);
  const { dark, isDark }: any = useContext(Context);
  const toggler = (value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>) => () => setValue(!value);
  return (
    <div>
      <header className={menu ? "expanded" : ""}>
        <div className="logo">KasRoudra</div>
        <div className="links">
          <Links />
        </div>
        <div className="icons">
          <i
            className={dark ? "bx bx-moon" : "bx bx-sun"}
            onClick={toggler(dark, isDark)}
          ></i>
        </div>
        <div className="menu">
          <i
            className={menu ? "bx bx-x" : "bx bx-menu"}
            onClick={toggler(menu, toggleMenu)}
          ></i>
          {menu && <Links />}
        </div>
      </header>
    </div>
  );
};

export default Header;
