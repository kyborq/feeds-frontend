import { Link } from "react-router-dom";
import LogoIcon from "../../../../assets/logo.svg";

import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.Logo}>
      <LogoIcon />
      <h1 className={styles.Title}>Feeds</h1>
      <Link to="/" className={styles.Link} />
    </div>
  );
};
