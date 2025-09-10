import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import style from "./AuthLayout.module.scss";

const AuthLayout = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.container}>
        <AuthSidebar />
        <main className={style.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;
