import { createBrowserRouter } from "react-router-dom";

import { ExplorePage, HomePage, Root } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
    ],
  },
]);
