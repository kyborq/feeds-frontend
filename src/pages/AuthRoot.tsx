import { Outlet } from "react-router-dom";
import { Header } from "../components";

import styles from "./AuthRoot.module.css";

export const AuthRoot = () => {
  return (
    <div className={styles.Root}>
      {/* <Header /> */}
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};
