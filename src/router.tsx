import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root";
import { Profile } from "./pages/Profile/Profile";
import { Post } from "./pages/Profile/Post";
import { Saved } from "./pages/Profile/Saved";
import { Search } from "./pages/Search/Search";
import { Auth } from "./pages/Auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
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
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);
