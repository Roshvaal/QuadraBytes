import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/pages/Home.jsx'
import Login from './components/pages/Login.jsx'
import AttendanceChecker from './components/pages/AttendanceChecker.jsx'


function App() {
  return (
   <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity1" element={<Login />} />
        <Route path="/activity5" element={<AttendanceChecker />}/>
      </Routes>
    </>
  );
}

export default App;
