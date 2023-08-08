import { Outlet, useLocation } from "react-router-dom";

import { Header } from "../components";

import styles from "./Root.module.css";

export const Root = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className={styles.Root}>
      {!isAuthPage && <Header />}
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};
