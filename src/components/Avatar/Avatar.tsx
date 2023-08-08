import styles from "./Avatar.module.css";

type Props = {
  avatar?: string;
};

export const Avatar: React.FC<Props> = ({ avatar }) => {
  return (
    <div className={styles.Container}>
      {!!avatar && (
        <img
          className={styles.Avatar}
          alt="User profile picture"
          src={avatar}
        />
      )}
    </div>
  );
};
