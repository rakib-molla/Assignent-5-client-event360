import { Outlet } from "react-router-dom";
import Sidebars from "./Sidebar";



const AdminLayout = () => {
  return (
    <div className="grid grid-cols-12">
        <Sidebars/>
        <div className="col-span-10 h-[200vh]">
            <Outlet/>
        </div>
    </div>
  );
};

export default AdminLayout;
