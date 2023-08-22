import { TIcon } from "../../assets/icons";
import { combine } from "../../utils/combine";
import { Icon } from "../Icon";
import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  label?: string;
  primary?: boolean;
};

export const Button: React.FC<Props> = ({ icon, label, primary }) => {
  return (
    <button className={combine(styles.Button, primary && styles.Primary)}>
      {!!label && <span>{label}</span>}
      {!!icon && <Icon name={icon} />}
    </button>
  );
};
