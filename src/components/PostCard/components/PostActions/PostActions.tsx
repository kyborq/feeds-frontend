import { Button } from "../../..";

import styles from "./PostActions.module.css";

type Props = {
  rating: number;
  onLike?: () => void;
  onDislike?: () => void;
};

export const PostActions: React.FC<Props> = ({ rating, onDislike, onLike }) => {
  const ratingColor: React.CSSProperties = {
    color: rating > 0 ? "green" : "red",
  };

  return (
    <div className={styles.Actions}>
      <Button icon="thumbsUp" compact onClick={onLike} />
      <span className={styles.Counter} style={ratingColor}>
        {rating}
      </span>
      <Button icon="thumbsDown" compact onClick={onDislike} />
    </div>
  );
};
