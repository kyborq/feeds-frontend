import { TIcon, icons } from "../assets/icons";

type Props = {
  name: TIcon;
  onClick?: () => void;
};

export const Icon: React.FC<Props> = ({ name, onClick }) => {
  const IconComponent = icons[name];
  return <IconComponent onClick={onClick} />;
};
