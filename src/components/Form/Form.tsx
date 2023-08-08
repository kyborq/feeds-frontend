import { Avatar } from "../Avatar/Avatar";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <form className={styles.Form}>
      <Avatar />
      <div className={styles.Fields}>
        <input type="text" />
        <textarea />
        <input type="file" />
      </div>
    </form>
  );
};
