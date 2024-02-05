import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
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

  {
    path:'/dashboard',
    element: <AdminLayout/>,
    errorElement: <div> Error</div>,
    children:[
      {
        path: '/dashboard',
        element: <Dashboard/>,
      }
    ]
  }

]);
