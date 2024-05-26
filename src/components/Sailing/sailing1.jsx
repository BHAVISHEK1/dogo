import React from 'react';
import Image1 from "../../assets/sailing1-1.jpg";
import { PiDogDuotone, PiCatDuotone } from "react-icons/pi";
import { GiMonkey, GiCapybara, GiSeaTurtle } from "react-icons/gi";
import { Button } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Sailing1 = () => {
    console.log("hekko")
  return (
    
    <div className="flex flex-col items-center justify-center bg-custom-gradient">
        {/* Image */}
       <div className="flex justify-center items-center lg:h-[500px] lg:w-[1000px]">
        <img className="items-center justify-center flex mt-[200px] rounded-lg" src={Image1} alt="" />
      </div>
        {/* Icons */}
        <div>
        <div className="flex justify-center space-x-4 max-w-[500px] lg:mt-[100px] mt-4">
        <PiDogDuotone className="text-4xl text-white" />
        <PiCatDuotone className="text-4xl text-white" />
        <GiMonkey className="text-4xl text-white" />
        <GiCapybara className="text-4xl text-white" />
        <GiSeaTurtle className="text-4xl text-white" />
      </div>
        </div>
                            {/* text and buttons  */}
         <div className='flex flex-col justify-center items-center mt-10 px-4 lg:px-[500px] md:px-[200px] space-y-4'>
        <h2 className='text-center flex justify-center text-amber-500 font-["Cambria"] font-extrabold text-2xl'>
                           Paw'dventure's Sailing
        </h2>
        {/* paragraph */}
        <div className='flex flex-col items-center text-center'>
          <p className='font-["Cambria"] font-medium text-white'>Memorable Boat Rides  </p>
        
          <p className='font-["Cambria"] font-medium text-white'>
          This is the newest and the most exciting addition to our list of Paw'dventures. With our trusted partners at Blue Bay Marines, we channelise our inner Jack Sparrow and venture out to the sea with our furry pirates. A leisurely sail with the picturesque backdrop of the Mumbai skyline is the perfect activity to unwind and decompress.
          </p>
         
        </div>
        {/* buttons */}
        <div className='flex flex-wrap justify-center gap-4 mt-4 mb-4'>
          <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            BOOK NOW <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
          <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            Download Details  <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
          
        </div>
      </div>

    </div>
  );
};

export default Sailing1;
