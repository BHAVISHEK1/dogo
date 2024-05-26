import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/home4-1.png";
import Image2 from "../../assets/home4-2.png";
import Image3 from "../../assets/home4-3.png";
import Image4 from "../../assets/Home4-4.jpg";

function Home4() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb text-white", 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-custom-gradient">
      {/* Texts */}
      <div className="my-[50px] flex flex-col items-center justify-center space-y-5 ">
        <p>
          Testimonals
        </p>
        <h3 className="text-3xl font-bold font-['Cambria']">See what Other Dog Parent Say</h3>
        <p>ABOUT US</p>
      </div>

      {/* Slider */}
      <div className="slider-container h-[440px] lg:w-[900px] md:w-[600px] sm:w-[500px] mx-auto ">
        <Slider {...settings}>
          <div className="text-center">
            <img src={Image1} alt="Testimonial 1" className="w-full" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
          <div className="text-center">
            <img src={Image2} alt="Testimonial 2" className="w-full" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
          <div className="text-center">
            <img src={Image3} alt="Testimonial 3" className="w-full" />
            {/* Add testimonial content here (text, quote, etc.) */}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home4;
