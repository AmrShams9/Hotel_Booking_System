import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/SignUp'
import LandingPage from './components/LandinPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePageUser from './components/HomePageUser'
import HomePageAdmin from './components/HomePageAdmin'
import MyHotels from './components/BookedHotels'
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/HomePageUser" element={<HomePageUser></HomePageUser>}></Route>
        <Route path="/HomePageAdmin" element={<HomePageAdmin></HomePageAdmin>}></Route>
        <Route path="/MyHotels" element={<MyHotels></MyHotels>}></Route>


      </Routes>
    </Router >

  );
}

export default App