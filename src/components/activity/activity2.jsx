import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../assets/activity2-1.jpg'
import Image3 from '../../assets/activity2-2.jpg'
import Image4 from '../../assets/activity2-3.jpg'
import Image5 from '../../assets/activity2-4.jpg'
import Image6 from '../../assets/activity2-5.jpg'
import Image2 from '../../assets/activity2-6.jpg'
import { Accordion, AccordionItem } from '../Accordion';


const Activity2 = () => {
    const [autoplay, setAutoplay] = useState(true);
    const [activeImage, setActiveImage] = useState(null);
  
    const handleImageClick = (index) => {
      setAutoplay(false);
      setActiveImage(index);
    };
  
    const handleSliderMouseLeave = () => {
      setAutoplay(true);
      setActiveImage(null);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: autoplay,
      speed: 4000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      arrows:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div className='bg-custom-gradient'>
        <div className="slider-container  flex flex-col" onMouseLeave={handleSliderMouseLeave}>
          <div className="lg:px-[200px] justify-evenly sm:px-[50px]">
            <Slider {...settings}>
              {[Image2, Image3, Image4, Image5, Image6].map((image, index) => (
                <div
                  key={index}
                  className={`px-2 transition-transform duration-500 ${activeImage === index ? 'scale-120' : ''}`}
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`Slide ${index + 2}`}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
  
        {/* Accordion Section */}
        <div className="flex-1 mt-10 ">
          <div className="lg:px-[400px] md:px-[70px] sm:px-[50px]">
            <h3 className="text-center text-3xl font-bold m-10 text-white">Frequently Asked Questions</h3>
            <Accordion className="border-2 border-black text-slate-300">
              <AccordionItem value={1} trigger="Is there a common transport?">
                Yes, we provide a common transport facility for all participants. The transport schedule will be shared closer to the event date.
              </AccordionItem>
              <AccordionItem value={2} trigger="Can you help us book Pet friendly Cab?">
                Participants are advised to bring comfortable clothing, personal hygiene items, and any necessary medications. A detailed checklist will be provided.
              </AccordionItem>
              <AccordionItem value={3} trigger="Will there be Mobile Network?">
                We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
              </AccordionItem>
              <AccordionItem value={4} trigger="How many total dogs will be there?">
                We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
              </AccordionItem>
              <AccordionItem value={5} trigger="Can I get my Small Dog is it safe?">
                We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
              </AccordionItem>
              <AccordionItem value={6} trigger="Can I get my Reactive Dog?">
                We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
              </AccordionItem>
              <AccordionItem value={7} trigger="Will my dog get off leash?">
                We provide all meals during the camp, including breakfast, lunch, and dinner. Special dietary needs can be accommodated upon request.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  };

export default Activity2