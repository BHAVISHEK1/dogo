import React from 'react'
import Home1 from './Home/home1'
import Home2 from './Home/home2'
import Home3 from './Home/home3'
import Home4 from './Home/home4'
import Footer from './Links/footer'
import Navbar from './Navbar'

const Home0 = () => {
  return (
    <>
    <Navbar className="" />
    <Home1 className="mt-[50px]" />
    <Home2 />
    <Home3 />
    <Home4 />
    <Footer />

    </>
  )
}

export default Home0