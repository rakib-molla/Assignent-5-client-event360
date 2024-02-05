import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import EventItemsManagement from "@/pages/admin/EventItemsManagement/EventItemsManagement";
import RecentEventManagement from "@/pages/admin/RecentEventManagement/RecentEventManagement";
import ServicesManagement from "@/pages/admin/ServicesManagement/ServicesManagement";
import Home from "@/pages/home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";

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
    path:'/admin',
    element: <AdminLayout/>,
    errorElement: <div> Error</div>,
    children:[
      {
        index: true,
        element: <Navigate to={'/admin/dashboard'}/>
      },
      {
        path: 'dashboard',
        element: <Dashboard/>,
      },
      {
        path: 'event-item-management',
        element: <EventItemsManagement/>
      },
      {
        path: 'recent-event-management',
        element: <RecentEventManagement/>
      },
      {
        path: 'service-management',
        element: <ServicesManagement/>
      },
    ]
  }

]);
