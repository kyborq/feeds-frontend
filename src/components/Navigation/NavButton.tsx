import { NavLink } from "react-router-dom";
import { TIcon } from "../../assets/icons";
import { Icon } from "../Icon";

import styles from "./NavButton.module.css";
import { combine } from "../../utils/combine";

type Props = {
  icon: TIcon;
  link: string;
};

export const NavButton: React.FC<Props> = ({ icon, link }) => {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        combine(styles.NavButton, isActive && styles.Active)
      }
    >
      <Icon name={icon} />
    </NavLink>
  );
};
