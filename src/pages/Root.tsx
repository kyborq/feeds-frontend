import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";
import { useScrollToTop } from "../hooks/useScrollToTop";

import styles from "./Root.module.css";

export const Root = () => {
  useScrollToTop();

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
