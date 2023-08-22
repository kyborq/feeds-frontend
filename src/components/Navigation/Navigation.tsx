import { NavButton } from "./NavButton";

import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <div className={styles.Navigation}>
      <NavButton icon="home" link="/" />
      <NavButton icon="compass" link="/explore" />
      <NavButton icon="bell" link="/notifications" />
      <NavButton icon="user" link="/profile" />
    </div>
  );
};
