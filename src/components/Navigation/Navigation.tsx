import { NavButton } from "./NavButton";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavButton icon="user" link="/" />
      <NavButton icon="user" link="/explore" />
      <NavButton icon="user" link="/follows" />
      <NavButton icon="user" link="/profile" />
    </div>
  );
};
