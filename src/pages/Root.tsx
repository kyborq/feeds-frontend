import { Outlet } from "react-router-dom";

import styles from "./Root.module.css";

export const Root = () => {
  return (
    <div className={styles.Root}>
      <div className={styles.Content}>
        <Outlet />
      </div>
    </div>
  );
};
