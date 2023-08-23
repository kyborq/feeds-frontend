import styles from "./Attachment.module.css";

type Props = {
  src: string;
  onDelete?: () => void;
};

export const Attachment: React.FC<Props> = ({ src, onDelete }) => {
  return (
    <div className={styles.Attachment}>
      <button onClick={onDelete} className={styles.Close}>
        X
      </button>
      <img src={src} alt="" className={styles.Image} />
    </div>
  );
};
