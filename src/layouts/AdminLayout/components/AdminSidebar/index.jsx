import style from "./AdminSidebar.module.scss";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className={style.sidebar}>
      <h2 className={style.title}>Tài khoản</h2>
      <nav className={style.nav}>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Cài đặt
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? `${style.link} ${style.active}` : style.link
          }
        >
          Quản lý người dùng
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
