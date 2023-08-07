import { PostActions } from "../PostActions/PostActions";
import styles from "./PostFooter.module.css";

export const PostFooter = () => {
  return (
    <div className={styles.Footer}>
      <PostActions />
    </div>
  );
};
