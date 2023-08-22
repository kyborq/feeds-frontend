import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.Empty}>
      <span className={styles.Text}>Тут пусто</span>
    </div>
  );
};
