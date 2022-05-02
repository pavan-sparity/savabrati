import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import ManageUser from './AdminPanel/ManageUser';
import ManageDonars from '../utilities/AdminPanel/ManageDonars';
import ManageBloodRequests from "../utilities/AdminPanel/ManageBloodRequests";
import ManageFeedback from "../utilities/AdminPanel/ManageFeedback";
import ManageEnquiries from "../utilities/AdminPanel/ManageEnquiries";
import Home from "../Pages/Home";
// import Home from "../../components/Pages/Home";

 
function Navbar() {
  const location = useLocation();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'f1f1f1' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                {/* <AiIcons.AiOutlineClose /> */}
                <b style={{fontSize:"25px", color:"#f1f1f1"}}>WELCOME ADMIN</b>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div style={{float: 'left', width: '50%'}}>
          {location.pathname === '/Apanel/manageuser' && <ManageUser />}
          {location.pathname === '/Apanel/managedonars' && <ManageDonars />}
          {location.pathname === '/Apanel/managebloodrequests' && <ManageBloodRequests />}
          {location.pathname === '/Apanel/managefeedback' && <ManageFeedback />}
          {location.pathname === '/Apanel/manageenquiries' && <ManageEnquiries />}
          {location.pathname === '/' && <Home />}

        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;