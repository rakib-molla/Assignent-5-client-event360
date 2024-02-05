import { Outlet } from "react-router-dom";
import Sidebars from "./Sidebar";



const AdminLayout = () => {
  return (
    <div className="flex w-full">
        <Sidebars/>
        <div className="w-4/5 border ">
          <div className='w-full h-10 border text-center bg-[#081A51] py-2 text-white'>
            Navbar
          </div>
            <div className='h-screen '>
            <Outlet></Outlet>
          </div>
            {/* footer menu  */}
          <div className='w-full h-10 bg-[#081A51] border'>
            <div className='copyright-text '>
              <p className='text-center text-white p-2'>
                © {new Date().getFullYear()} Rakib  All
                Right Reserved.
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default AdminLayout;
