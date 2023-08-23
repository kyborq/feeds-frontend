import { TIcon } from "../../assets/icons";
import { combine } from "../../utils/combine";
import { Icon } from "../Icon";
import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  label?: string;
  primary?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({ icon, label, primary, onClick }) => {
  return (
    <button
      className={combine(
        styles.Button,
        primary && styles.Primary,
        !label && !!icon && styles.Compact
      )}
      onClick={onClick}
    >
      {!!label && <span>{label}</span>}
      {!!icon && <Icon name={icon} />}
    </button>
  );
};
