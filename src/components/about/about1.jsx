import React from 'react';
import Image1 from "../../assets/about1-1.jpg";
import Image2 from "../../assets/about1-3.jpg";
import Image3 from "../../assets/about1-2.jpg";

const About1 = () => {
  return (
    <div className='bg-custom-gradient'>
        {/* 1st image */}
        <div className="flex justify-center items-center mt-16"> 
      {/* Image1 for small screens */}
      <img
        src={Image1}
        alt="Small screen image"
        className="block lg:hidden w-full h-auto object-cover rounded-lg"
      />
      {/* Image2 for large screens */}
      <div className="hidden lg:flex justify-center items-center lg:h-[500px] lg:w-[1000px]">
        <img
          src={Image2}
          alt="Large screen image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
          {/* Title and image */}
          <div className="flex justify-center items-center mt-20 px-4 lg:px-0">
      <div className="lg:w-3/4 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 lg:pr-10">
          <h2 className="text-center lg:text-left text-amber-500 font-cambria font-extrabold text-2xl mb-4">
            ABOUT PAW'DVENTURE
          </h2>
          <p className="text-white mb-2">Let the Dog Out</p>
          <h3 className="text-white mb-2">Let's make India Pet Friendly</h3>
          <p className="text-white mb-2">
            The joy I felt the first time I saw my dog, Kuro running his ears out in an open field,
            was the day I realized every pet and pet parent should experience this feeling.
            No inhibition, no restriction, just the freedom to explore the world and live their best lives.
            That’s how <span className="text-red-500 font-bold">Paw’dventure</span> started with the intention to make this joy a universal experience for all pet parents.
            What we realized was that a domesticated dog lives in a restricted environment.
            Many aspects, such as exploring new places freely, meeting new dogs, is a luxury most of them never experience.
            Thus giving birth to the most common issues found in domesticated dogs, like anxiety and unbalanced behavior.
            Through our Paw’dventures, we let dogs explore their natural instincts. We let the dogs out!
            As not many places are pet-friendly and for people to have more empathy towards our dogs and dogs on the street,
            our ultimate goal is to make India Pet Friendly. The first thing required to meet that goal is a combination of well-behaved and socialized dogs and
            well-informed and responsible pet parents. Through our various Paw’dventures, we aim at creating a
            community of well-informed and responsible pet parents and well-behaved/socialized pets.
          </p>
          <p className="text-white">
            Join us on our journey to make India pet friendly, one Paw’dventure at a time.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <img src={Image3} alt="Paw'dventure" className="rounded-lg w-full h-auto lg:w-[700px]" />
        </div>
      </div>
    </div>
    <div className='flex items center lg:space-x-5 '>
     <div className='lg:px-[240px]  md:px-16 sm:px-16'>
        <h3 className='text-white'>Well behaved Dog</h3>
        <p className='text-white'>-Has a good Recall</p>
        <p className='text-white'> -Confident Dog in new surroundings </p>
      </div>
      <div>
        <h3 className='text-white'>Well socialised Dog</h3>
        <p className='text-white'>-Remains calm when introduces to new surroundings</p>
        <p className='text-white'>-Gives social space and personal space to other Dogs </p>
      </div>
     </div>
    </div>
  );
};

export default About1;
