import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image2 from '../../assets/overnight2-2.jpg';
import Image3 from '../../assets/overnight2-3.jpg';
import Image4 from '../../assets/overnight2-4.jpg';
import Image5 from '../../assets/overnight2-5.jpg';
import Image6 from '../../assets/overnight2-6.jpg';
import Image7 from '../../assets/overnight2-7.jpg';
import Image8 from '../../assets/overnight2-8.jpg';
import { Accordion, AccordionItem } from '../Accordion'; 

const Overnight2 = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows:false,
  };

  return (
    <div className='bg-custom-gradient'>
      <div className="slider-container  flex flex-col">
        <div className="lg:px-[200px] justify-evenly md:mt-8 sm:px-[50px]">
          <Slider {...settings}>
            <div className="px-2">
              <img
                src={Image2}
                alt="Slide 2"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image3}
                alt="Slide 3"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image4}
                alt="Slide 4"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image5}
                alt="Slide 5"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image6}
                alt="Slide 6"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image7}
                alt="Slide 7"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
            <div className="px-2">
              <img
                src={Image8}
                alt="Slide 8"
                className="w-full h-full object-cover rounded-lg aspect-ratio-16/9"
              />
            </div>
          </Slider>
        </div>
      </div>
      
      {/* Accordion Section */}
      <div className="flex-1 mt-10">
        <div className='lg:px[400px] md:px-[70px] sm:[50px]'>
            <h3 className='text-center text-3xl font-bold text-white m-10'>Frequently Asked Questions</h3>
        <Accordion className="border-2 text-white border-black">
          <AccordionItem value={1} trigger=" Is there a common transport?">
            Yes, we provide a common transport facility for all participants. The transport schedule will be shared closer to the event date.
          </AccordionItem>
          <AccordionItem value={2} trigger=" Can you help us book Pet friendly Cab?">
            Participants are advised to bring comfortable clothing, personal hygiene items, and any necessary medications. A detailed checklist will be provided.
          </AccordionItem>
          <AccordionItem value={3} trigger=" Will there be Mobile Network?">
            We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
          </AccordionItem>
          <AccordionItem value={4} trigger=" How many total dogs wil be there ?">
            We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
          </AccordionItem>
          <AccordionItem value={5} trigger="Can I get my Small Dog is it safe?">
            We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
          </AccordionItem>
          <AccordionItem value={6} trigger=" Can I get my Reactive Dog?">
            We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
          </AccordionItem>
          <AccordionItem value={7} trigger=" Will my dog get off leash?">
            We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Overnight2;
