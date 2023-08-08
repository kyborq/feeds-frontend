import classNames from "classnames";
import styles from "./Button.module.css";
import { TIcon } from "../../assets/icons";
import { Icon } from "../Icon";

type Props = {
  icon?: TIcon;
  label?: string;
  primary?: boolean;
  compact?: boolean;
  transparent?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  icon,
  label,
  primary,
  compact,
  transparent,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        styles.Button,
        primary && styles.Primary,
        compact && styles.Compact,
        transparent && styles.Transparent
      )}
      onClick={onClick}
    >
      {!!icon && <Icon name={icon} />}
      {!!label && label}
    </button>
  );
};
