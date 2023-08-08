import thumbsUp from "./thumbs-up.svg";
import thumbsDown from "./thumbs-down.svg";
import moreHorizontal from "./more-horizontal.svg";
import bookmark from "./bookmark.svg";
import message from "./message.svg";

export const icons = {
  thumbsUp,
  thumbsDown,
  moreHorizontal,
  bookmark,
  message,
};

export type TIcon = keyof typeof icons;
