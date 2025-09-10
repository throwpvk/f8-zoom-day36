import style from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
