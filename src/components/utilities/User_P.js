import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData1';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useLocation } from 'react-router-dom';
import BloodRequests from './BloodRequests';
// import ManageUser from './AdminPanel/ManageUser';
// import ManageDonars from '../utilities/AdminPanel/ManageDonars';
// import ManageBloodRequests from "../utilities/AdminPanel/ManageBloodRequests";
// import ManageFeedback from "../utilities/AdminPanel/ManageFeedback";
// import ManageEnquiries from "../utilities/AdminPanel/ManageEnquiries";
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
                <b style={{fontSize:"25px", color:"#f1f1f1"}}>WELCOME USER</b>
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
          {location.pathname === '/User_P/bloodrequests' && <BloodRequests />}
          {/* {location.pathname === '/Apanel/managedonars' && <ManageDonars />}
          {location.pathname === '/Apanel/managebloodrequests' && <ManageBloodRequests />}
          {location.pathname === '/Apanel/managefeedback' && <ManageFeedback />}
          {location.pathname === '/Apanel/manageenquiries' && <ManageEnquiries />} */} 
           {/* {location.pathname === '/Pages/Home' && <Home />} */}

        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;





















// import React from 'react';
// import './Apanel.css';
// import { 
//     Container,
//     Col,
//     Button,
//     Row
    
// } from 'reactstrap';
// import { Navigate, useNavigate } from 'react-router-dom';

// const User_P = () => {
//   let navigate=useNavigate();
//   const handleChange=()=>{
//     navigate('/Home');
//   }
//   return (
    
//     <div>
// <Container>
//         <Row>
//     <Col
//       className="bg-light border admin"
//       lg="12"
      
//     >
//       Welcome User
//     </Col>
//   </Row>


//   <Row>
//     <Col
//       className="bg-light border"
//       xs="4"
//       block
//     >
// <div>
//   <Button
//   block
//     color="info"
//   >
//     Manage Users
//   </Button>
// </div>

// <div>
//   <Button
//   block
//     color="info"
//   >
//     Manage Requests
//   </Button>
// </div>

// <div>
//   <Button
//   block
//     color="info"
//   >
//     Manage Feedback
//   </Button>
// </div>

// <div>
//   <Button
//   block
//     color="info"
//   >
//     Manage Enquiry
//   </Button>
// </div>
//     </Col>
//     <Col
//       className="bg-light border"
//       xs="6"
//     >
//       .col-6
//     </Col>
//     <Col
//       className="bg-light border"
//       xs="2"
//     >
//       <button onClick={handleChange}>LOGOUT</button>
//     </Col>
//   </Row>

//         </Container>
//     </div>
//   )
// }

// export default User_P