import sticker from "../../assets/sticker.webp";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <img src={sticker} className={styles.Sticker} draggable="false" />
      <div className={styles.Content}>Feeds 2023</div>
    </div>
  );
};
