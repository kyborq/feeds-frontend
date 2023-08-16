import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <a href="/" className={styles.Link}>
        Политика конфиденциальности
      </a>
      <a href="/" className={styles.Link}>
        Пользовательское соглашение
      </a>
      <a href="/" className={styles.Link}>
        Техническая поддержка
      </a>
      <a href="/" className={styles.Link}>
        Список обновлений
      </a>
    </div>
  );
};
