import { Avatar } from "../../../components/Avatar/Avatar";
import { IconButton } from "../../../components/Button/IconButton";
import { Card } from "../../../components/Card/Card";

import styles from "./ProfileHeader.module.css";

export const ProfileHeader = () => {
  return (
    <Card className={styles.Header}>
      <div className={styles.Thumbnail}></div>
      <div className={styles.Info}>
        <Avatar />
        <IconButton icon="userPlus" label="Follow" primary />
      </div>
    </Card>
  );
};
