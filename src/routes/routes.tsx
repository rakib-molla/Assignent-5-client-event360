import App from "@/App";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div> Error</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
