import { combine } from "../../utils/combine";
import styles from "./Card.module.css";

type Props = {
  title?: string;
  className?: string;
  children?: React.ReactNode;
};

export const Card: React.FC<Props> = ({ title, className, children }) => {
  return (
    <div className={styles.Card}>
      {!!title && <h2 className={styles.Title}>{title}</h2>}
      <div className={combine(styles.Content, className)}>{children}</div>
    </div>
  );
};
