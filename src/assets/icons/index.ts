import thumbsUp from "./thumbs-up.svg";
import thumbsDown from "./thumbs-down.svg";
import moreHorizontal from "./more-horizontal.svg";
import bookmark from "./bookmark.svg";
import message from "./message.svg";
import search from "./search.svg";

export const icons = {
  thumbsUp,
  thumbsDown,
  moreHorizontal,
  bookmark,
  message,
  search,
};

export type TIcon = keyof typeof icons;
