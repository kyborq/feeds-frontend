import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root";
import { Privacy, Terms } from "./pages/Legal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <div></div>,
      },
      {
        path: "privacy",
        element: <Privacy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
    ],
  },
]);
