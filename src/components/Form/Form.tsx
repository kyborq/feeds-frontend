import styles from "./Form.module.css";

type Props = {
  children?: React.ReactNode;
  width?: number;
};

export const Form: React.FC<Props> = ({ children, width }) => {
  return (
    <form className={styles.Form} style={{ width }}>
      {children}
    </form>
  );
};
