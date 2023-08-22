import LogoIcon from "../../assets/logo.svg";
import { Navigation } from "../Navigation/Navigation";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <LogoIcon />
      <Navigation />
    </div>
  );
};
