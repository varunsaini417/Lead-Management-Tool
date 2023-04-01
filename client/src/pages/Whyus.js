import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Whyus = (props) => {
  return (
    <>
      <Navbar isUserL = {props.isUserIn} whyActive = {"active"}/>
      <h1>About Us</h1>  
    </>
  )
}

export default Whyus