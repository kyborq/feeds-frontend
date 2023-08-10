import { useState } from "react";
import { TIcon } from "../../../../assets/icons";
import { Icon } from "../../../Icon";
import styles from "./Input.module.css";

type Props = {
  icon: TIcon;
  placeholder?: string;
  obscure?: boolean;
};

export const Input: React.FC<Props> = ({ icon, placeholder, obscure }) => {
  const [hidePassword, setHidePassword] = useState(obscure);

  const toggleObscure = () => setHidePassword((hide) => !hide);

  return (
    <div className={styles.Field}>
      <Icon name={icon} />
      <input
        type={hidePassword ? "password" : "text"}
        className={styles.Input}
        placeholder={placeholder}
      />
      {obscure && (
        <Icon name={hidePassword ? "eye" : "eyeOff"} onClick={toggleObscure} />
      )}
    </div>
  );
};
