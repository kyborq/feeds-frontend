import { User } from "./user-model";

export interface Meta {
  rating: number;
  created: string;
}

export interface Post {
  author: User;
  title?: string;
  content?: string;
  picture?: string;
  meta: Meta;
}
