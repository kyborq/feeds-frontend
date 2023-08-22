import { Outlet } from "react-router-dom";

import styles from "./Root.module.css";
import { Header } from "../components";
import { Footer } from "../components/Footer/Footer";

export const Root = () => {
  return (
    <div className={styles.Root}>
      <Header />
      <div className={styles.Content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
