import { TIcon } from "../../../../assets/icons";
import { Icon } from "../../../Icon";
import styles from "./Input.module.css";

type Props = {
  icon: TIcon;
  placeholder?: string;
};

export const Input: React.FC<Props> = ({ icon, placeholder }) => {
  return (
    <div className={styles.Field}>
      <Icon name={icon} />
      <input className={styles.Input} placeholder={placeholder} />
    </div>
  );
};
