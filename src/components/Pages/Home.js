import React from 'react';
import NavBar from '../utilities/NavBar_All';
import Slider from '../utilities/Slider';
import AboutUs from '../utilities/AboutUs';
import Team from '../utilities/Team';
import Footer from '../utilities/Footer';
import { Link } from 'react-router-dom';




const Home = () => {
  return (
    <div>
        {/* <NavBar/> */}
        <Slider/>
        <AboutUs/>
        <Team/>
        <Footer/>
        <Link to='/' className='Link' />
    </div>
  )
}

export default Home