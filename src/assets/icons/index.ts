import thumbsUp from "./thumbs-up.svg";
import thumbsDown from "./thumbs-down.svg";
import moreHorizontal from "./more-horizontal.svg";

export const icons = {
  thumbsUp,
  thumbsDown,
  moreHorizontal,
};

export type TIcon = keyof typeof icons;
