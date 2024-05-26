import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className='h-[100px] w-screen bg-white flex justify-center items-center fixed top-0 z-50 border-b-4 border-black'>
      <div className='flex justify-between items-center w-full max-w-6xl px-4 bg-white'>
        <div>
          <img className='h-[40px] w-[150px]' src={Logo} alt="Logo" />
        </div>
        <ul className='hidden md:flex space-x-10'>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/">Home</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/overnight-camps">Overnight Stay</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/Sailing">Sailing</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
             <Link to="/activity">One Day Activity</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/tripindia">TripIndia</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/about">About</Link>
          </li>
          <li className='cursor-pointer hover:text-sky-700'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-20 cursor-pointer'>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-slate-700 flex flex-col justify-center items-center z-10'
        }
      >
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/" onClick={() => setNav(false)}>Home</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/overnight-camps" onClick={() => setNav(false)}>Overnight Stay</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/Sailing" onClick={() => setNav(false)}>Sailing</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/activity" onClick={() => setNav(false)}>One Day Activiy</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/tripindia" onClick={() => setNav(false)}>Trip India</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/about" onClick={() => setNav(false)}>About</Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          <Link to="/contact" onClick={() => setNav(false)}></Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
