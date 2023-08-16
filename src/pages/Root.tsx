import { Outlet } from "react-router-dom";

import { Header } from "../components";

import styles from "./Root.module.css";
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
