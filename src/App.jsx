import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/pages/Home.jsx";
import Login from "./components/pages/Login.jsx";
import Calc from "./components/pages/Calc.jsx";
import AttendanceChecker from "./components/pages/AttendanceChecker.jsx";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity1" element={<Login />} />
        <Route path="/activity2" element={<></>} />
        <Route path="/activity3" element={<></>} />
        <Route path="/activity4" element={<Calc />} />
        <Route path="/activity5" element={<AttendanceChecker />} />
        <Route path="*" element={<></>} />
      </Routes>
    </>
  );
}

export default App;