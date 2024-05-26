import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../assets/home-3-1.webp";
import Image2 from "../../assets/home-3-2.webp";
import Image3 from "../../assets/home-3-3.webp";
import Image4 from "../../assets/home-3-4.webp";
import Image5 from "../../assets/home-3-5.jpg";
import Image6 from "../../assets/home-3-6.jpg";
import Image7 from "../../assets/home-3-7.jpg";
import Image8 from "../../assets/home-3-8.jpg";
import Image9 from "../../assets/home-3-9.jpg";
import Image10 from "../../assets/Pet-lover-label.png";
import { Link } from 'react-router-dom';

const Home3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className='bg-custom-gradient'>
      {/* Title */}
      <div className="flex justify-center content-center ">
        <p className="font-['Cambria'] text-4xl mt-5 font-extrabold">Experience our Paw'dventures</p>
      </div>
      {/* Title ends here */}

      {/* 1st set of images */}
      <div className="flex flex-row lg:px-[200px] md:py-[70px] sm:py-[50px] content-center justify-evenly lg:space-x-10 sm:space-x-2 md:space-x-4 mt-5 ">
      <Link to="/overnight-camps">
      <div className="cursor-pointer">
        <img className="rounded-lg hover:animate-tilt-n-move-shaking border border-black" src={Image1} alt="Camping" />
        <h4 className="text-center text-white">Camping</h4> <br />
        <p className="text-center text-white">Paw'dventure Nightouts</p>
      </div>
    </Link>
        <Link to="/Sailing">
        <div className='cursor-pointer'>
          <img className="rounded-lg hover:animate-tilt-n-move-shaking  border border-black" src={Image2} alt="" />
          <h4 className='text-center text-white'>Sailing</h4> <br />
              <p className='text-center text-white'>Explore Indian Ocean</p> 
        </div>
        </Link>
       <Link to="/activity">
       <div className='cursor-pointer'> 
          <img className="rounded-lg hover:animate-tilt-n-move-shaking  border border-black" src={Image3} alt="" />
          <h4 className='text-center text-white'>ONE DAY ACTIVITY</h4> <br />
              <p className='text-center text-white'>Doggo's day out</p> 
        </div>
       </Link>
        <Link to="/tripindia">
        <div className='cursor-pointer'>
          <img className="rounded-lg hover:animate-tilt-n-move-shaking  border border-black" src={Image4} alt="" />
          <h4 className='text-center text-white'>TRIP INDIA</h4> <br />
           <p className='text-center text-white'>Making India Pet Friendly</p> 
        </div>
        </Link>
      </div> 
          {/* Pet image */}
      <div className="flex justify-center my-[50px]">
        <div className="">
          <img src={Image10} className='h-[300px] md:h-[100px] hover:animate-left-text-appear' alt="" />
          <span className="text-white text-lg absolute left-0 hidden group-hover:block transition duration-300">Some Text</span>
        </div>
      </div>

      {/* 2nd set of images with Slick */}
      <div className="slider-container mt-10 flex flex-col">
        <div className="lg:px-[200px] justify-evenly sm:px-[50px]">
          <Slider {...settings}>
            <div className="px-2"> {/* Added padding to create space between slides */}
              <img src={Image5} alt="Slide 1" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="px-2"> {/* Added padding to create space between slides */}
              <img src={Image6} alt="Slide 2" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="px-2"> {/* Added padding to create space between slides */}
              <img src={Image7} alt="Slide 3" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="px-2"> {/* Added padding to create space between slides */}
              <img src={Image8} alt="Slide 4" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="px-2"> {/* Added padding to create space between slides */}
              <img src={Image9} alt="Slide 5" className="w-full h-full object-cover rounded-lg" />
            </div>
          </Slider>
        </div>
      </div>
        {/* ends here */}
    </div>
  );
};

export default Home3;
