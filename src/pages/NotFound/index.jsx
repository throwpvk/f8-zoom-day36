import style from "./NotFound.module.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className={style.container}>
        {" "}
        <p>Page Not Found.</p>
        <NavLink to="/" end>
          Go Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
