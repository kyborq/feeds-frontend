import { Avatar } from "../Avatar/Avatar";
import { Card } from "../Card/Card";
import { Icon } from "../Icon";
import { Attachment } from "./Attachment";

import styles from "./Post.module.css";

export const Post = () => {
  return (
    <Card className={styles.Post}>
      <div className={styles.PostHeader}>
        <Avatar />
        <div>
          <span></span>
          <span></span>
        </div>
        <Icon name="thumbsUp" />
      </div>
      <Attachment src="blob:http://localhost:5173/f3cdea3d-2570-47dd-8c2e-e7181c0209ec" />
      <div className={styles.PostFooter}>
        <Icon name="thumbsUp" />
        <Icon name="thumbsDown" />
        <Icon name="message" />
      </div>
    </Card>
  );
};
