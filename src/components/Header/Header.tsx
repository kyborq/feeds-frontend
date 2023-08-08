import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Logo } from "./components/Logo/Logo";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.Header}>
      <Logo />

      <div className={styles.Navigation}>
        <Button icon="search" transparent />
        <Avatar
          avatar="https://sun9-79.userapi.com/impf/c844321/v844321699/14984/MZk-JQLfsS8.jpg?size=500x517&quality=96&sign=c6c9ff0d9122f1bb98f04d1509a3b2b8&type=album"
          login="kyborq"
        />
      </div>
    </div>
  );
};
