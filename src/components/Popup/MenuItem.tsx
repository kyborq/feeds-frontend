import { TIcon } from "../../assets/icons";
import { Icon } from "../Icon";

import styles from "./MenuItem.module.css";

type Props = {
  icon: TIcon;
  label: string;
  onClick?: () => void;
};

export const MenuItem: React.FC<Props> = ({ icon, label, onClick }) => {
  return (
    <div onClick={onClick} className={styles.MenuItem}>
      <Icon name={icon} />
      <span className={styles.Label}>{label}</span>
    </div>
  );
};
