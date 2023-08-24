import { useOnClickOutside } from "usehooks-ts";
import styles from "./Popup.module.css";
import { useRef } from "react";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
};

export const Popup: React.FC<Props> = ({ children, onClose }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(popupRef, () => onClose && onClose());

  return (
    <div ref={popupRef} className={styles.Popup}>
      {children}
    </div>
  );
};
