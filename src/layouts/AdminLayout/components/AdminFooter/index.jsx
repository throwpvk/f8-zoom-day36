import style from "./AdminFooter.module.scss";

const AdminFooter = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        © {new Date().getFullYear()} MyCompany. All rights reserved. Admin Page.
      </div>
    </footer>
  );
};

export default AdminFooter;
