import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";

import styles from "./Form.module.css";

export const PostForm = () => {
  return (
    <div className={styles.Form}>
      <Avatar />
      <div className={styles.Input}></div>
      <div className={styles.Actions}>
        <Button icon="atSign" />
        <Button label="Сохранить" primary />
      </div>
    </div>
  );
};
