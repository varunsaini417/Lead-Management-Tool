import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Whyus from "./pages/Whyus"
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import axios from 'axios';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const[user, setUser] = useState("")
  
  useEffect(()=>{
    axios.get('http://localhost:5000/user/check-user')
      .then(res=>{
        console.log(res.data.isUser);
        setUser(res.data.isUser)
      })
      .catch(err=>{
        console.log(err.response.data.isUser);
        setUser(err.response.data.isUser);
      })
  },[user])
  let isuser = user;
  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard' element={<Dashboard isUserIn = {isuser}/>} />
          <Route path='/' element={<Home isUserIn={isuser} />} />
          <Route path='/why-us' element={<Whyus isUserIn={isuser} />} />
          <Route path='/features' element={<Features isUserIn={isuser} />} />
          <Route path= '/sign-in' element={<SignIn isUserIn={isuser} />} />
          <Route path= '/sign-up' element={<SignUp isUserIn={isuser} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;