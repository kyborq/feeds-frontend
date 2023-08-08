import classNames from "classnames";
import styles from "./Button.module.css";
import { TIcon } from "../../assets/icons";
import { Icon } from "../Icon";
import { Link } from "react-router-dom";

type Props = {
  icon?: TIcon;
  label?: string;
  link?: string;
  primary?: boolean;
  compact?: boolean;
  transparent?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  icon,
  label,
  link,
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
      {!!link && <Link to={link} className={styles.Link} />}
    </button>
  );
};
