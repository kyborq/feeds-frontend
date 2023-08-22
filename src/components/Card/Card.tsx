import styles from "./Card.module.css";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.Card}>
      {!!title && <h2 className={styles.Title}>{title}</h2>}
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
