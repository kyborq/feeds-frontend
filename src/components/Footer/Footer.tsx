import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link to="/privacy" className={styles.Link} replace>
        Конфиденциальность
      </Link>
      <Link to="/terms" className={styles.Link} replace>
        Условия
      </Link>
    </div>
  );
};
