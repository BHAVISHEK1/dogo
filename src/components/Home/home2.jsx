import React from 'react';
import { Button } from "@material-tailwind/react";
import calendar from "../../assets/calendar.png"; // Fixed the path by removing extra space
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import Image1 from "../../assets/Home2-1.jpg";
import Image2 from "../../assets/Home2-2.png";
import Logo from "../../assets/logo2.png";
import { Link } from 'react-router-dom';

function Home2() {
  const activities = [
    {
      date: 'Saturday - May 11th',
      name: 'Summer Woofshop',
       link : "/Reservation"
    },
    {
      date: 'Saturday - June 8th',
      name: 'Overnight Camps',
      link: "/Reservation",
    },
    {
      date: 'Saturday - June 15th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
    {
      date: 'Saturday - June 20th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
    {
      date: 'Saturday - June 21th',
      name: 'Overnight Camps',
      link: "/Reservation"
    },
  ];

  return (
    <div className='bg-custom-gradient'>
      {/* Date and Calendar */}
      <div className="container mx-auto p-4 flex flex-col items-center justify-center">
        <img className='h-[150px] w-[150px]' src={calendar} alt="Calendar" />
        <div className="flex flex-wrap justify-center gap-4 mt-5">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md w-[200px] transform transition duration-300 hover:shadow-lg hover:scale-110">
              <div className="text-gray-800 font-bold text-xl mb-2">{activity.date}</div>
              <div className="text-2xl">{activity.name}</div>
              {activity.link && (
                <a href={activity.link} className="block mt-4 text-blue-500 hover:underline">
                  Book Now <MdKeyboardDoubleArrowRight />
                </a>
              )}
              <FaRegCalendarCheck className="text-gray-500 mt-2" />
            </div>
          ))}
        </div>
      </div>
      {/* Home2 middle section */}
      <div className='flex flex-col md:flex-row justify-center py-5'>
        <div className='px-4 mb-4 md:mb-0'>
          {/* Image 1 */}
          <img className='rounded-xl w-full max-w-[600px]' src={Image1} alt="people" />
        </div>
        <div className='relative w-full max-w-[600px] h-[600px] md:h-auto ml-[20px]'>
          {/* Image 2 as background */}
          <img className='absolute inset-0 w-full h-full object-cover rounded-xl' src={Image2} alt="background" />
          {/* Logo on top */}
          <div className='absolute inset-0 flex flex-col '>
            <img className='max-h-[90px] max-w-[80%]' src={Logo} alt="logo" />
            <p className="text-lg mb-4 font-['Cambria']  text-white font-bold">Reconnect with your dog through various activities</p>
             <p className="text-lg mb-4 font-['Cambria'] text-white  font-bold">With the growing number of dogs and dog parents, more and more places are becoming pet-friendly</p>
             <p className="text-lg mb-4 font-['Cambria'] text-white  font-bold">A well-adjusted and social doggo is a prerequisite for making India pet-friendly</p>
              <p className='flex space-x-3'>
             <Link to="/about">
             <Button
               className="font-['Cambria'] bg-black border border-white p-[15px] flex justify-center content-center text-white" ripple={true}>
                 KNOW MORE<MdKeyboardDoubleArrowRight className= "text-xs"/>
              </Button> </Link>
              <Button className="font-['Cambria'] border border-white  bg-black p-[15px] flex justify-center content-center text-white" ripple={true}>
                 Check out Instagram  <MdKeyboardDoubleArrowRight className= "text-xs"/>
              </Button>
              </p>
              <p className='flex mt-[10px] left-0 justify-start mb-[50px]'>
              <Link to="/overnight-camps">
              <p className="bg-slate-600 p-[15px] w-[130px] rounded-full cursor-pointer text-white hover:text-yellow-500"  ><FaHandPointRight size={25}  /> Camping </p>
              </Link>
              <Link to="/Sailing">
              <p className="bg-slate-600 p-[15px] w-[130px] rounded-full cursor-pointer  text-white hover:text-yellow-500"> <FaHandPointRight size={25}/> Sailing </p>
              </Link>
              <Link to="/activity">
              <p className="bg-slate-600 p-[15px] rounded-full cursor-pointer  text-white hover:text-yellow-500"><FaHandPointRight size={25} /> 1 Day Activity </p>
              </Link>
              <Link to="/tripindia">
              <p className="bg-slate-600 p-[15px] w-[130px] rounded-full cursor-pointer  text-white hover:text-yellow-500"> <FaHandPointRight size={25} /> Trip India</p>
              </Link>
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
