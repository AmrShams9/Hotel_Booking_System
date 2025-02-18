import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/SignUp'
import LandingPage from './components/LandinPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
=======

>>>>>>> bb71c7035811171d18d331cb2d01fb040d31a46d
function App() {


  return (
<<<<<<< HEAD

=======
>>>>>>> bb71c7035811171d18d331cb2d01fb040d31a46d
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
<<<<<<< HEAD
        <Route path="/signup" element={<Signup></Signup>}></Route>


      </Routes>
    </Router >

=======
        <Route path="/register" element={<Signup></Signup>}></Route>
      </Routes>
    </Router>
>>>>>>> bb71c7035811171d18d331cb2d01fb040d31a46d
  );
}

export default App
