import { TIcon } from "../../assets/icons";
import { combine } from "../../utils/combine";
import { Icon } from "../Icon";
import styles from "./IconButton.module.css";

type Props = {
  icon: TIcon;
  label?: string;
  primary?: boolean;
  onClick?: () => void;
};

export const IconButton: React.FC<Props> = ({
  icon,
  label,
  primary,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={combine(styles.Button, primary && styles.Primary)}
    >
      <Icon name={icon} />
      {!!label && <span className={styles.Label}>{label}</span>}
    </button>
  );
};
