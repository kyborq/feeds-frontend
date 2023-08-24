import { Avatar } from "../Avatar/Avatar";
import { IconButton } from "../Button/IconButton";
import { Card } from "../Card/Card";
import { Attachment } from "./Attachment";

import styles from "./Post.module.css";

type VoteStatus = -1 | 1;

type PostAuthor = {
  avatar: string;
  name: string;
};

type Props = {
  image?: string;
  content?: string;
  votes: number;
  comments?: number;
  date: string;
  author: PostAuthor;
  yourVote?: VoteStatus;
  onVote?: (value: VoteStatus) => void;
  onShowComments?: () => void;
};

export const Post: React.FC<Props> = ({
  content,
  image,
  votes,
  author,
  date,
  yourVote,
  comments,
  onVote,
  onShowComments,
}) => {
  const handleVoteUp = () => onVote && onVote(1);
  const handleVoteDown = () => onVote && onVote(-1);

  return (
    <Card className={styles.Post}>
      <div className={styles.PostHeader}>
        <Avatar image={author.avatar} />
        <div className={styles.Info}>
          <span className={styles.Author}>{author.name}</span>
          <span className={styles.Date}>{date}</span>
        </div>
        <IconButton icon="moreHorizontal" />
      </div>
      {!!content && <div>{content}</div>}
      {!!image && <Attachment src={image} />}
      <div className={styles.PostFooter}>
        <div className={styles.VotingBlock}>
          <IconButton
            icon="thumbsUp"
            label={`${votes}`}
            onClick={handleVoteUp}
            primary={yourVote === 1}
          />
          <IconButton
            icon="thumbsDown"
            onClick={handleVoteDown}
            primary={yourVote === -1}
          />
        </div>
        <IconButton
          icon="message"
          label={`${comments || ""}`}
          onClick={onShowComments}
        />
      </div>
    </Card>
  );
};
