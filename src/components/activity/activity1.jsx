import React from 'react';
import Image1 from "../../assets/activity1-1.jpg";
import { PiDogDuotone, PiCatDuotone } from "react-icons/pi";
import { GiMonkey, GiCapybara, GiSeaTurtle } from "react-icons/gi";
import { Button } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Activity1 = () => {
  return (
    <div>
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
        Paw'dventure's Day Out
        </h2>
        {/* paragraph */}
        <div className='flex flex-col items-center text-center'>
          <p className='font-["Cambria"] font-medium text-white'>Doggo's day out </p>
        
          <p className='font-["Cambria"] font-medium text-white'>
          This is the best possible introduction to the spirit of Paw'dventure for the newcomers. It’s a Paw’dventure filled morning that kicks-off with a socialisation activity and a hike into the nature and concludes with a cool-off swim at a nearby natural water body and a hefty breakfast with a view. A perfect precursor for the best afternoon nap ever!
          </p>
         
        </div>
        {/* buttons */}
        <div className='flex flex-wrap justify-center items-center flex-col gap-4 mt-4 mb-4'>
        <p className='font-["Cambria"] font-medium text-white'>
             A perfect precursor for the best afternoon nap ever!
           </p>
         <div className='flex space-x-3 mb-[10px]'>
         <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            BOOK NOW <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
          <Button className="font-['Cambria'] bg-black p-[15px] border border-white flex items-center text-white" ripple={true}>
            Download Details  <MdKeyboardDoubleArrowRight className="text-xs ml-2"/>
          </Button>
         </div>
          
        </div>
      </div>

    </div>
    </div>
  )
}

export default Activity1;