import { NavLink } from "react-router-dom";
import style from "./AuthSidebar.module.scss";

const AuthSidebar = () => {
  return (
    <aside className={style.sidebar}>
      <h2 className={style.title}>Tài khoản</h2>
      <nav className={style.nav}>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Đăng nhập
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Đăng ký
        </NavLink>
        <NavLink
          to="/forgot-password"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Quên mật khẩu
        </NavLink>
      </nav>
    </aside>
  );
};

export default AuthSidebar;
