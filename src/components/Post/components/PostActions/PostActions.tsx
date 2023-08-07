import { Icon } from "../../../Icon";

import styles from "./PostActions.module.css";

export const PostActions = () => {
  return (
    <div className={styles.Actions}>
      <Icon name="thumbsUp" />
      <span className={styles.Counter}>0</span>
      <Icon name="thumbsDown" />
    </div>
  );
};
