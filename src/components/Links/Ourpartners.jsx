import React from 'react'
import Image1 from '../../assets/overnight3-1.png';
import Image2 from '../../assets/overnight3-2.png';

const Ourpartner = () => {
  return (
    <div className='bg-custom-gradient'>
        <div>
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Our Partners</span></h1>
        </div>
        {/* Partners  */}
        <div className='flex items-center justify-center space-x-6 space-y-6 bg-black '>
            <img className="rounded-lg hover:animate-tilt-n-move-shaking"  src={Image1} alt="" />
            <img className="rounded-lg hover:animate-tilt-n-move-shaking" src={Image2} alt="" />
        </div>

    </div>
  )
}

export default Ourpartner;