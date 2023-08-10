import styles from "./Form.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Form: React.FC<Props> = ({ children }) => {
  return <form className={styles.Form}>{children}</form>;
};
