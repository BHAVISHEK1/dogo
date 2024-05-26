import React from 'react';
import Image1 from "../../assets/overnight1-1.jpg";
import { PiDogDuotone, PiCatDuotone } from "react-icons/pi";
import { GiMonkey, GiCapybara, GiSeaTurtle } from "react-icons/gi";
import { Button } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Overnight1 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-custom-gradient">
      <div className="flex justify-center items-center lg:h-[500px] lg:w-[1000px]">
        <img className="items-center justify-center flex mt-[200px] rounded-lg" src={Image1} alt="" />
      </div>
      <div className="flex justify-center space-x-4 max-w-[500px] lg:mt-[100px] mt-4">
        <PiDogDuotone className="text-4xl text-white " />
        <PiCatDuotone className="text-4xl text-white " />
        <GiMonkey className="text-4xl     text-white " />
        <GiCapybara className="text-4xl   text-white" />
        <GiSeaTurtle className="text-4xl  text-white " />
      </div>
      {/* 2nd part */}
      <div className='flex flex-col justify-center items-center mt-10 px-4 lg:px-[500px] md:px-[200px] space-y-4'>
        <h2 className='text-center flex justify-center text-amber-500 font-["Cambria"] font-extrabold text-2xl'>
          Overnight Camps
        </h2>
        {/* paragraph */}
        <div className='flex flex-col items-center text-center'>
          <p className='font-["Cambria"] font-medium  text-white'>We let the Dogs Out </p>
          <h3 className='font-["Cambria"] font-bold   text-white'>Paw'dventure Nightouts</h3> 
          <p className='font-["Cambria"] font-medium  text-white'>
            These fun filled over-night camps are a hit in our community. These camps are carefully designed to stimulate the doggos and reconnect with their humans like never before. At these camps the focus is on teaching the pet parents the basic concepts like socialisation and desensitisation. We do this with fun and interactive games under the guidance of certified canine behaviourist, Aditya Patil (Instagram - Thevigilantdogtrainer). We also make sure, to take our dogs for a hike in the nature. Currently these overnight camps are conducted in popular locations near Mumbai and Pune, with our plans to soon expand all around the country.
          </p>
          <h5 className='text-center flex justify-center text-amber-500 font-["Cambria"] font-extrabold mt-[40px] text-2xl'>
            Join us and become a part of Paw’dventure community.
          </h5>
        </div>
        {/* buttons */}
     <div>
     <div className='flex flex-wrap justify-center gap-4 mt-4 space-y-[15px]'>
          <Button className="font-['Cambria'] bg-black p-[15px] flex items-center border border-white text-white" ripple={true}>
            Check now  <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
          <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            8th June Details  <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
          <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            15th-17th June Details  <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
        </div>
     </div>
      </div>
    </div>
  );
};

export default Overnight1;
