import React from 'react';
import Mobile_veri from '../utilities/Mobile_veri';
import { Link } from 'react-router-dom';

const Mobile_OTP_Page = () => {
  return (
    <div>
        <Mobile_veri /> 
         <Link to='/mobile' className='Link' />
    </div>
  )
}

export default Mobile_OTP_Page