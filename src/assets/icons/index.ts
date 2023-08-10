import thumbsUp from "./thumbs-up.svg";
import thumbsDown from "./thumbs-down.svg";
import moreHorizontal from "./more-horizontal.svg";
import bookmark from "./bookmark.svg";
import message from "./message.svg";
import search from "./search.svg";
import key from "./key.svg";
import atSign from "./at-sign.svg";
import lock from "./lock.svg";
import user from "./user.svg";
import eye from "./eye.svg";
import eyeOff from "./eye-off.svg";

export const icons = {
  thumbsUp,
  thumbsDown,
  moreHorizontal,
  bookmark,
  message,
  search,
  user,
  lock,
  atSign,
  key,
  eye,
  eyeOff,
};

export type TIcon = keyof typeof icons;
