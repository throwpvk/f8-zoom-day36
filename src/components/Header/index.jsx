import style from "./Header.module.scss";

const Header = ({ children }) => {
  return <h1 className={style.heading}>{children}</h1>;
};

export default Header;
