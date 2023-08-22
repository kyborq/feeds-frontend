import { createBrowserRouter } from "react-router-dom";

import { Root } from "./pages/Root";
import { HomePage } from "./pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
