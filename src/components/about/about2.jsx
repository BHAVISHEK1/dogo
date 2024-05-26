import React from 'react';
import Image1 from '../../assets/about2-1.jpg';
import Image2 from '../../assets/about2-2.jpg';
import Image3 from '../../assets/about2-3.jpg';
import { FaInstagramSquare, FaFacebookSquare, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const About2 = () => {
  const images = [
    { src: Image1, alt: "About 1", text: "Sharvil", text2: "Founder and CEO" },
    { src: Image2, alt: "About 2", text: "Adifty", text2: "Canine Behaviorist" },
    { src: Image3, alt: "About 3", text: "Keyur", text2: "Brand and Marketing Consultant" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-custom-gradient">
      <h2 className='text-center font-["Cambria"] font-extrabold text-white text-3xl mb-8'>
             Meet Our Team
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[26rem] object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <div className="flex space-x-4 mb-4">
                  <FaInstagramSquare className="text-white text-2xl cursor-pointer hover:text-pink-600 transition-colors duration-300" />
                  <FaFacebookSquare className="text-white text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-300" />
                  <FaLinkedinIn className="text-white text-2xl cursor-pointer hover:text-blue-700 transition-colors duration-300" />
                  <FaSquareXTwitter className="text-white text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-2xl font-bold text-white">{image.text}</p>
              <p className="text-xl font-base text-white">{image.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About2;
