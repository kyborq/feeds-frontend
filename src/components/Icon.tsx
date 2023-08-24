import { TIcon, icons } from "../assets/icons";

type Props = {
  name: TIcon;
  size?: number;
  onClick?: () => void;
};

export const Icon: React.FC<Props> = ({ name, size, onClick }) => {
  const IconComponent = icons[name];
  return (
    <IconComponent onClick={onClick} width={size || 24} height={size || 24} />
  );
};
