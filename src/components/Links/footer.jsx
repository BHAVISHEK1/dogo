import React from 'react';
import Image1 from "../../assets/logo2.png";
import { FaMapLocation } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col justify-center items-center py-20'>
      {/* container */}
      <div className='flex flex-col lg:flex-row lg:justify-center lg:items-start lg:space-x-10 w-full max-w-screen-xl px-6 lg:px-12 space-y-10 lg:space-y-0'>
        {/* Individuals */}

        {/* 1st div */}
        <div className='flex-1'>
          <img className='h-[50px] w-[150px] mb-4' src={Image1} alt="logo2" />
          <p className='mb-4'>
            Through our Paw’dventures we intend to create a community of well-informed & responsible dog parents and dog lovers.
            With each adventure we spread awareness about the needs of doggos to become well adjusted, social and desensitised. 
            With the right kind of training, we can make India pet-friendly, together. One Pawdventure at a time.
          </p>
          <p className='mb-2'>
            Powered by
          </p>
          <p>
            TRAVOWLET ADVENTURE TOURs
          </p>
        </div>

        {/* 2nd div */}
        <div className='flex-1 space-y-5'>
          <div className='space-y-5'>
            <h2 className='text-lg font-extrabold font-["Cambria"] mb-2 '>Links</h2>
            <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out  font-["Cambria"] font-semibold' href="#">Home</a>
             <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] font-semibold' href="#">About</a>
             <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] font-semibold' href="#">Upcoming Trips</a>
             <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] font-semibold' href="#">Contact</a>

          </div>

          <div className='space-y-5'>
            <h2 className='text-lg font-extrabold font-["Cambria] mb-2 '>Important</h2>
            <p className='hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold'>Terms and Conditions</p>
            <p className='hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold'>Privacy and policy</p>
            <p className='hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold'>Cancellation Policy (Trip India)</p>
            <p className='hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold'>Cancellation Policy (Night camp)</p>
          </div>
        </div>

        {/* 3rd div */}
        <div className='flex-1 space-y-5'>
          <h2 className='text-lg mb-2  font-["Cambria"] font-extrabold'>Services</h2>
          <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold' href="#">Overnight camps</a>
          <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold' href="#">Sailing</a>
          <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold' href="#">One Day Trip</a>
          <a className='block hover:underline hover:text-red-500 transition duration-300 ease-in-out font-["Cambria"] cursor-pointer font-semibold' href="#">Trip India</a>
        </div>

        {/* 4th div */}
        <div className='flex-1 space-y-5'>
          <h2 className='text-lg font-extrabold mb-2 font-["Cambria"] '>Locations</h2>
          <i className='flex  cursor-pointer hover:underline hover:text-red-500 transition duration-300 ease-in-out'> 
          <FaMapLocation className='mx-2' /> 
           Mumbai | Pune | Bengaluru
           </i>
          <h2 className='text-lg font-semibold mb-2 mt-4'>Contact</h2>
           <p className='cursor-pointer flex hover:underline hover:text-red-500 transition duration-300 ease-in-out'>
             <MdOutgoingMail className='mx-2' /> 
             sharvil.s@pawdventure.in
             </p>
           <p className='cursor-pointer flex hover:underline hover:text-red-500 transition duration-300 ease-in-out '>
             <FaPhoneSquareAlt className='mx-2' /> 
             +91 97691 19994
             </p>
        </div>
        {/* Individuals ends here */}
      </div>
    </div>
  );
}

export default Footer;
