import { Button } from "../../..";
import { PostActions } from "../PostActions/PostActions";
import styles from "./PostFooter.module.css";

type Props = {
  rating: number;
  onLike?: () => void;
  onDislike?: () => void;
};

export const PostFooter: React.FC<Props> = ({ rating, onLike, onDislike }) => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Side}>
        <PostActions rating={rating} onDislike={onDislike} onLike={onLike} />
        <Button icon="message" label="0" compact />
      </div>
      <Button icon="bookmark" label="0" compact />
    </div>
  );
};
