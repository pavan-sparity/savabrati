import React from "react";
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom';
import { Button } from 'reactstrap';
import AdminPanel from "./components/Pages/AdminPanel";
import SignUpPage from "./components/Pages/SignUpPage";
import Beneficiary_Request from "./components/Pages/Beneficiary_Request";
import Mobile_OTP_Page from "./components/Pages/Mobile_OTP_Page";
import UserPanel from "./components/Pages/UserPanel";
import NavBar_All from "./components/utilities/NavBar_All";
import Home from "./components/Pages/Home";
import AboutUs from './components/utilities/AboutUs';
import Team from './components/utilities/Team';
import ContactUs from './components/utilities/ContactUs';
import AdminLogin from "./components/utilities/AdminLogin";
// import User_P from "./components/utilities/User_P";
import Apanel from "./components/utilities/Apanel";
import Display from "./components/utilities/Display";
import SubmitOtp from "./components/utilities/SubmitOtp";
import Userlogin from "./components/utilities/Userlogin";
import UserOtp from "./components/utilities/UserOtp";
import Mobile_veri from "./components/utilities/Mobile_veri";
import BenfTable from "./components/utilities/Main/BenfTable";
import Mobile_veri1 from "./components/utilities/Mobile_veri1";
import SubmitOtp1 from "./components/utilities/SubmitOtp1";
import UserTable from "./components/utilities/Main/UserTable";
import ManageUser from "./components/utilities/AdminPanel/ManageUser";
import ManageDonors from "./components/utilities/AdminPanel/ManageDonars";
import ManageBloodRequests from "./components/utilities/AdminPanel/ManageBloodRequests";
import AdminPanel1 from "./components/utilities/AdminPanel/AdminPanel";
import User_P from "./components/utilities/User_P";
import BloodRequests from "./components/utilities/BloodRequests";
import UserLogout from "./components/utilities/UserLogout";


export default (props) => {
  const location = useLocation();
  return (
    <div>
      {/* <SignUpPage /> */}
      {/* <AdminPanel /> */}
      {/* <Beneficiary_Request /> */}
      {/* <Mobile_OTP_Page /> */}
      {/* <UserPanel /> */}
      {/* <NavBar_All/> */}

{/* <BrowserRouter> */}
      <NavBar_All />
    {(location.pathname === '/Apanel' || location.pathname === '/Apanel/manageuser' || location.pathname === "/Apanel/managedonars"
    || location.pathname === "/Apanel/managebloodrequests" || location.pathname === '/Apanel/managefeedback' || location.pathname === '/Apanel/manageenquiries' )
    &&  <Apanel/> }

    {(location.pathname === '/User_P' || location.pathname === '/User_P/bloodrequests' || location.pathname === '/User_P/userlogout') && <User_P/>}
      
      <Routes>
      <Route path='/signup' element={<Mobile_OTP_Page />}  />
      <Route path='/login' element={<Userlogin/>} />
      <Route path='/'exact element={<Home/>}/>
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
      {/* <Route path='/apanel' element={<Apanel/>}/> */}
      <Route path="/display" element={<Display/>}/>
      {/* <Route path="/display" element={<Display/>}/> */}
      <Route path="/SubmitOtp" element={<SubmitOtp/>}/>
      <Route path="/Userlogin" element={<Userlogin/>}/>
      <Route path="/UserOtp" element={<UserOtp/>}/>
      {/* <Route path="/User_P" element={<User_P/>}/> */}
      <Route path="/Mobile_veri" element={<Mobile_veri/>}/>
      <Route path="/Mobile_veri1" element={<Mobile_veri1/>}/>
      <Route path="/submitotp1" element={<SubmitOtp1/>}/>
      <Route path="/benftable" element={<BenfTable/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/usertable" element={<UserTable/>}/>
      <Route path="/bloodrequests" element={<BloodRequests/>}/>
      <Route path="/" element={<UserLogout/>}/>

     {/* <Route path='/apanel'exact element={<Apanel/>}/> */}
      {/* 
      <Route path="/Apanel/manageuser" element={<ManageUser/>}/>
      <Route path="/Apanel/managedonars" element={<ManageDonors/>}/>
      <Route path="/Apanel/managebloodrequests" element={<ManageBloodRequests/>}/> */}
     
      
    <Route path="/adminpanel" element={<AdminPanel1/>}/>

      </Routes>
      

      {/* <User_P/> */}
{/* 
      </BrowserRouter> */}

    </div>
  
  
    //  <Button color="danger">Danger!</Button>
    
  );
}

// export default App;
