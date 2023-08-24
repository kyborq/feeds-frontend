import { createBrowserRouter } from "react-router-dom";
import { EventsPage, ExplorePage, HomePage, UserPage, Root } from "./pages";

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
      {
        path: "notifications",
        element: <EventsPage />,
      },
      {
        path: "user",
        element: <UserPage />,
      },
      {
        path: "user/:login",
        element: <UserPage />,
      },
    ],
  },
]);
