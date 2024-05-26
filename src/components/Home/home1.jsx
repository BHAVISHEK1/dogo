import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from "../../assets/slider-1.jpg";
import Image2 from "../../assets/slider-2.jpg";
import Image3 from "../../assets/slider-3.jpg";
import Image4 from "../../assets/slider-4.jpg";
import "./home1.css";

function Home1() {
  console.log("Home1 component is rendering");

  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,  // Ensure arrows are shown
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,  // Ensure arrows are shown
        }
      }
    ]
  };

  console.log("Slider settings:", settings);

  return (
    <div className="slider-container bg-custom-gadient flex justify-center items-center w-full overflow-hidden h-auto mt-[80px] mb-[100px]">
      <div className="lg:w-[500px] md:w-[400px] sm:w-[250px] w-full px-2">
        <Slider {...settings}>
          <div className="flex justify-center">
            <img src={Image1} alt="Slide 1" className="object-cover rounded-xl w-full h-auto" />
            {console.log("Image 1 loaded")}
          </div>
          <div className="flex justify-center">
            <img src={Image2} alt="Slide 2" className="object-cover rounded-xl w-full h-auto" />
          </div>
          <div className="flex justify-center">
            <img src={Image3} alt="Slide 3" className="object-cover rounded-xl w-full h-auto" />
          </div>
          <div className="flex justify-center">
            <img src={Image4} alt="Slide 4" className="object-cover rounded-xl w-full h-auto" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home1;
