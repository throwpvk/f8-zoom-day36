import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import AdminFooter from "./components/AdminFooter";
import AuthSidebar from "./components/AdminSidebar";
import style from "./AdminLayout.module.scss";

const AdminLayout = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <AuthSidebar />
        <main className={style.content}>
          <Outlet />
        </main>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
