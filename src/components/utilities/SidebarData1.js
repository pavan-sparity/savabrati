import React from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
// import * as BiLogOutCircle from 'react-icons/fa';
// import ManageUser from "./components/utilities/AdminPanel/ManageUser";
// import ManageDonors from "./components/utilities/AdminPanel/ManageDonars";
// import ManageBloodRequests from "./components/utilities/AdminPanel/ManageBloodRequests";

export const SidebarData = [
  {
    title: 'BloodRequests',
    path: '/User_P/bloodrequests',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'logout',
    path: '/Home',
    icon: <IoIcons.IoIosPaper/>,
    cName: 'nav-text'
  }
//   {
//     title: 'ManageDonars',
//     path: '/Apanel/managedonars',
//     icon: <IoIcons.IoIosPaper />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'ManageBloodRequests',
//     path: '/Apanel/managebloodrequests',
//     icon: <FaIcons.FaCartPlus />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'ManageFeebacks',
//     path: '/Apanel/managefeedback',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'ManageEnquiries',
//     path: '/Apanel/manageenquiries',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   }
  


];
//   {
//     title: 'Team',
//     path: '/team',
//     icon: <IoIcons.IoMdPeople />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Messages',
//     path: '/messages',
//     icon: <FaIcons.FaEnvelopeOpenText />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Support',
//     path: '/support',
//     icon: <HiOutlineLogout />,
//     cName: 'nav-text'
//   }
{/* <Routes>

<Route path="/manageuser" element={<ManageUser/>}/>
<Route path="/managedonars" element={<ManageDonors/>}/>
<Route path="/managebloodrequests" element={<ManageBloodRequests/>}/>


</Routes> */}
