import React from 'react';
import Image1 from "../../assets/tripindia1-1.jpg";
import { PiDogDuotone, PiCatDuotone } from "react-icons/pi";
import { GiMonkey, GiCapybara, GiSeaTurtle } from "react-icons/gi";
import { Button } from "@material-tailwind/react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Tripinida1 = () => {
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
              TRIP INDIA  
              </h2>
            <div className='flex flex-col items-center text-center'>
              <p className='font-["Cambria"] font-medium  text-white'>Making India Pet Friendly  </p>
              <h3 className='font-["Cambria"] font-bold   text-white'>Explore Incredible India</h3> 
              <p className='font-["Cambria"] font-medium  text-white'>
                 We have embarked on the journey to Make India PetFriendly. Living in the urban jungles suppresses the natural instincts of domesticated doggos. This hypes their stress and anxiety levels. A well-balanced doggo needs regular socialisation, mental stimulation, and physical activity to manage the stress and anxiety. This also boosts their confidence and helps them be well adjusted. Travel with our Paw’dventure pack to experience train and road journeys to explore local markets, cafés, beaches and mountains all around our country. Paw’dventure is striving to bring about the awareness toward these needs and Make India Pet-Friendly. Join us and become a part of Paw’dventure community.
              </p>
              <h5 className='text-center flex justify-center text-amber-500 font-["Cambria"] font-extrabold mt-[40px] text-2xl'>
                Join us and become a part of Paw’dventure community.
              </h5>
            </div>
            {/* buttons */}
         <div>
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
      );
    };

export default Tripinida1