import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header flex flex-space flex-align-center'>
        <div className=''>
        <div className="logo inline-block vertical-mid">
            <img src="/public/images/img2.jpg" alt="Logo" className='logoImg'/>
            <h6>Mental Health Care</h6>
        </div>
        <span className='inline-block vertical-mid text-center'>Mental Health <br /> Care</span>
        </div>
      <div className="content">
        <ul className='flex flex-space li-none a-color flex-align-center gap-5'>
            <li><Link className='text-none color-white' to="/">Home</Link></li>
            <li><Link className='text-none color-white' to="/">Conatct</Link></li>
            <li><Link className='text-none color-white' to="/">Services</Link></li>
            <li><Link className='text-none color-white Appointment' to="/">Book Your Appointment</Link></li>
            <li><Link className='text-none color-white Doctor' to="/">Doctor Login</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
