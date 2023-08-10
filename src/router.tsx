import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root";
import { Profile } from "./pages/Profile/Profile";
import { Post } from "./pages/Profile/Post";
import { Saved } from "./pages/Profile/Saved";
import { Search } from "./pages/Search/Search";
import { Auth } from "./pages/Auth/Auth";
import { Feed } from "./pages/Feed/Feed";
import { AuthRoot } from "./pages/AuthRoot";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthRoot />,
    children: [
      {
        path: "",
        element: <Auth />,
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Feed />,
      },
      {
        path: ":id",
        element: <Profile />,
        children: [
          {
            path: ":post",
            element: <Post />,
          },
          {
            path: "saved",
            element: <Saved />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
