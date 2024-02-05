import App from "@/App";
import AdminLayout from "@/layouts/AdminLayout";
import Dashboard from "@/pages/admin/Dashboard";
import CreateEventItemsManagement from "@/pages/admin/EventItemsManagement/CreateEventItemsManagement";
import CreateRecentEventManagement from "@/pages/admin/RecentEventManagement/CreateRecentEventManagement";
import CreateServicesManagement from "@/pages/admin/ServicesManagement/CreateServicesManagement";
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
      // event items management 
      {
        path: 'create-event-management',
        element: <CreateEventItemsManagement/>
      },
      // recent events management
      {
        path: 'create-recent-event-management',
        element: <CreateRecentEventManagement/>
      },
      // services management
      {
        path: 'create-service-management',
        element: <CreateServicesManagement/>
      },
    ]
  }

]);
