import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { cn } from "@/lib/utils"
import { LayoutDashboard,  } from "lucide-react"
import { Link, NavLink } from "react-router-dom"



function Sidebars() {
  return (
    <aside className="bg-[#F6F6F6] h-screen w-[328px] lg:col-span-2 sticky top-0 left-0 overflow-auto p-4 lg:p-5 ">
        <nav className="flex flex-col gap-2">
            
            {/* <NavLink 
            className={({isActive})=> cn('rounded-md p-3 bg-[#bdbcbc] hover:bg-[#818181] hover:text-white transition-all truncate flex items-center  gap-3',
            {
                'bg-[#2211bdd2] text-white': isActive
            }
            )}
             to={'/admin/dashboard'}>
            <LayoutDashboard className="shrink-0"/> <span className="truncate">Dashboard</span>
            </NavLink> */}


          <Sidebar width="298px">
            <Menu >
                <MenuItem className=''><Link to={'/admin/dashboard'}> Dashboard </Link></MenuItem>
              <SubMenu  label="Event Items Management">
                <MenuItem> <Link to={'/admin/create-event-management'}>Create Event Items</Link></MenuItem>
                <MenuItem><Link to={''}> Event Items List </Link></MenuItem>
              </SubMenu>

              <SubMenu  label="Recent Event Management">
                <MenuItem> <Link to={''}>Create Recent  Management</Link></MenuItem>
                <MenuItem><Link to={''}> Recent Event  List </Link></MenuItem>
              </SubMenu>

              <SubMenu  label="Service Management">
                <MenuItem> <Link to={'create-service-management'}>Create Service Management</Link></MenuItem>
                <MenuItem><NavLink to={''}> Service Management List </NavLink></MenuItem>
              </SubMenu>
              
            </Menu>
          </Sidebar>

        </nav>
    </aside>
  )
}

export default Sidebars