import { Button } from "..";
import { Post } from "../../models/post-model";
import styles from "./PostCard.module.css";
import { PostFooter } from "./components";

type Props = {
  post: Post;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <div className={styles.Post}>
      <div className={styles.Header}>
        <div className={styles.Avatar} />
        <div className={styles.Info}>
          <span className={styles.Author}>{post.author.name}</span>
          <span className={styles.Date}>{post.meta.created}</span>
        </div>
        <Button icon="moreHorizontal" compact transparent />
      </div>
      <div className={styles.Content}>
        {!!post.title && <span className={styles.Title}>{post.title}</span>}
        {!!post.picture && (
          <img className={styles.Image} src={post.picture} alt={post.title} />
        )}
      </div>
      <PostFooter rating={post.meta.rating} />
    </div>
  );
};
