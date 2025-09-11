import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      {/* Logo*/}
      <div className={style.logo}>
        <img src="../../src/assets/admin-logo.png" alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className={style.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Posts
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Settings
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Users
        </NavLink>
        <NavLink
          to="/privacy"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Privacy
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? style.active : "")}
        >
          Contact
        </NavLink>
      </nav>

      {/* Login / Register */}
      <div className={style.actions}>
        <NavLink to="/login" className={style.loginBtn}>
          Login
        </NavLink>
        <NavLink to="/register" className={style.registerBtn}>
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
