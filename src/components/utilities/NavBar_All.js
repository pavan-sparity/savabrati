import React from 'react';
import {
  Navbar,
  Nav,
  BSpan,
  BImg
} from 'bootstrap-4-react';
import sparityLogo from "../assets/sparity.png";
import '../../App.css';
import { NavLink, Link } from 'react-router-dom';
import SignUpPage from '../Pages/SignUpPage';



const Menu = props => (
  <div>
    <Navbar expand="md" fixed="top" bg="dark" style={{height:'80px', backgroundColor:'white !important', borderBottom:'2px solid red'}}>
      {/* <Navbar.Brand href="#">Carousel</Navbar.Brand> */}
      <img src={sparityLogo} style={{width: '180px', height: '50px'}} />
      <Navbar.Toggler
        target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <Navbar.Collapse id="navbarCollapse">
        <Navbar.Nav mr="auto" >

         <Link to="/"> <Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', paddingLeft:'50px',fontSize:'20px', fontWeight:'bold'}} active>Home <BSpan srOnly>(current)</BSpan></Nav.ItemLink></Link>
          <Link to="/aboutus"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>About Us</Nav.ItemLink></Link>
          <Link to ="/team"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>Team</Nav.ItemLink></Link>
          <Link to="/contactus"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>Contact Us</Nav.ItemLink></Link>
          <Link to="/login"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>Login</Nav.ItemLink></Link>
          
          
          <Link to="/signup"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>SignUp</Nav.ItemLink></Link>
          <Link to="/adminlogin"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>Admin Login</Nav.ItemLink></Link>
          {/* <Link to="/Apanel"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>Admin Panel</Nav.ItemLink></Link> */}
          <Link to="/benftable"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>BenfTable</Nav.ItemLink></Link>
          <Link to="/usertable"><Nav.ItemLink href="#" style={{color:'black', paddingRight:'40px', fontSize:'20px', fontWeight:'bold'}}>UserTable</Nav.ItemLink></Link>
        </Navbar.Nav>
      </Navbar.Collapse>
    </Navbar>
   


    </div>
  )

  export default Menu
  