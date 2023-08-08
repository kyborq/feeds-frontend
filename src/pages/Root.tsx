import { Outlet } from "react-router-dom";

import { Header } from "../components";

import styles from "./Root.module.css";

export const Root = () => {
  return (
    <div className={styles.Root}>
      <Header />
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};
