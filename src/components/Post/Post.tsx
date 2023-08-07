import { Icon } from "../Icon";
import styles from "./Post.module.css";
import { PostFooter } from "./components";

type Props = {
  title?: string;
  image: string;
  author: string;
  timeStamp: string;
};

export const Post: React.FC<Props> = ({ image, title, author, timeStamp }) => {
  return (
    <div className={styles.Post}>
      <div className={styles.Header}>
        <div className={styles.Avatar} />
        <div className={styles.Info}>
          <span className={styles.Author}>{author}</span>
          <span className={styles.Date}>{timeStamp}</span>
        </div>
        <Icon name="moreHorizontal" />
      </div>
      <div className={styles.Content}>
        {!!title && <span className={styles.Title}>{title}</span>}
        <img className={styles.Image} src={image} alt={title} />
      </div>
      <PostFooter />
    </div>
  );
};
