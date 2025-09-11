import style from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
      <NavLink
        to="/privacy"
        className={`${({ isActive }) => (isActive ? style.active : "")} ${
          style.link
        }`}
      >
        Privacy
      </NavLink>
      <NavLink
        to="/contact"
        className={`${({ isActive }) => (isActive ? style.active : "")} ${
          style.link
        }`}
      >
        Contact
      </NavLink>
    </footer>
  );
};

export default Footer;
