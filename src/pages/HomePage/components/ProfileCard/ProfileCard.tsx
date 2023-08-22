import { Avatar } from "../../../../components/Avatar/Avatar";
import styles from "./ProfileCard.module.css";

export const ProfileCard = () => {
  return (
    <div className={styles.Card}>
      <Avatar />
      <span className={styles.Name}>Ivanov Ivan</span>
      <span className={styles.Follows}>2004</span>
    </div>
  );
};
