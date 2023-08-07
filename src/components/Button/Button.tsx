import classNames from "classnames";
import styles from "./Button.module.css";

type Props = {
  label: string;
  primary?: boolean;
};

export const Button: React.FC<Props> = ({ label, primary }) => {
  return (
    <button className={classNames(styles.Button, primary && styles.Primary)}>
      {label}
    </button>
  );
};
