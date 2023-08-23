import styles from "./Attachment.module.css";

type Props = {
  src: string;
  editable?: boolean;
  onDelete?: () => void;
};

export const Attachment: React.FC<Props> = ({ src, editable, onDelete }) => {
  return (
    <div className={styles.Attachment}>
      {editable && (
        <button onClick={onDelete} className={styles.Close}>
          X
        </button>
      )}
      <img src={src} alt="" className={styles.Image} />
    </div>
  );
};
