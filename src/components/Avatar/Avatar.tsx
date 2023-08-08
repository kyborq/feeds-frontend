import { Link } from "react-router-dom";
import styles from "./Avatar.module.css";

type Props = {
  avatar?: string;
  login?: string;
};

export const Avatar: React.FC<Props> = ({ avatar, login }) => {
  return (
    <div className={styles.Container}>
      {!!avatar && (
        <img
          className={styles.Avatar}
          alt="User profile picture"
          src={avatar}
        />
      )}
      {!!login && <Link className={styles.Link} to={`/@${login}`} />}
    </div>
  );
};
