import React from 'react';
import Registration from '../utilities/Registration';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div>
        <Registration />
        <Link to='/signup' className='Link' />
    </div>
  )
}

export default SignUpPage