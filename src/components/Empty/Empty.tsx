import React from "react";
import styles from "./Empty.module.css";

type Props = {
  text: string;
  children?: React.ReactNode;
};

export const Empty: React.FC<Props> = ({ text, children }) => {
  return (
    <div className={styles.Empty}>
      <span className={styles.Text}>{text}</span>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
