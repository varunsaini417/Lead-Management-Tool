import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import HeroSection from '../Components/HeroSection/HeroSection'
const Home = (props) => {
   
  return (
    <>
      <Navbar isUserL={props.isUserIn} homeActive={"active"}/>
      <HeroSection isUserL={props.isUserIn}/>
    </>
  )
}

export default Home