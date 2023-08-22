import styles from "./Avatar.module.css";

type Props = {
  image?: string;
};

export const Avatar: React.FC<Props> = ({ image }) => {
  return (
    <div className={styles.Avatar}>
      {!!image && <img src={image} alt="" className={styles.Image} />}
    </div>
  );
};
