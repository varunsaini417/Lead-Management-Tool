import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Features = (props) => {
  return (
    <>
        <Navbar isUserL = {props.isUserIn} featuresActive ={"active"}/>
        <h1>Features</h1>
    </>
  )
}

export default Features