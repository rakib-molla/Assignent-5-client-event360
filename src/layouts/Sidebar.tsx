import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { cn } from "@/lib/utils"
import { LayoutDashboard,  } from "lucide-react"
import { NavLink } from "react-router-dom"



function Sidebars() {
  return (
    <aside className="bg-[#eeececd2] h-screen col-span-2 sticky top-0 left-0 overflow-auto p-4 lg:p-5 ">
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


          <Sidebar width="297px">
            <Menu >
                <MenuItem className=''> Dashboard</MenuItem>
              <SubMenu  label="Event Items Management">
                <MenuItem> <NavLink to={''}>Create Event Items</NavLink></MenuItem>
                <MenuItem><NavLink to={''}> Event Items List </NavLink></MenuItem>
              </SubMenu>

              <SubMenu  label="Recent Event Management">
                <MenuItem> <NavLink to={''}>Create Recent  Management</NavLink></MenuItem>
                <MenuItem><NavLink to={''}> Recent Event  List </NavLink></MenuItem>
              </SubMenu>

              <SubMenu  label="Service Management">
                <MenuItem> <NavLink to={''}>Create Service Management</NavLink></MenuItem>
                <MenuItem><NavLink to={''}> Service Management List </NavLink></MenuItem>
              </SubMenu>
              
            </Menu>
          </Sidebar>

        </nav>
    </aside>
  )
}

export default Sidebars