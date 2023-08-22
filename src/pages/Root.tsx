import { Outlet } from "react-router-dom";

import styles from "./Root.module.css";
import { Header } from "../components";

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
