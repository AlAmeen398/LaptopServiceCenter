import React from "react"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./components/About"
import Contact from "./pages/Contact"
import Explore from "./pages/Explore"
import Shop from "./pages/Shop"
import Support from "./pages/Support"
import LaptopService from "./pages/LaptopService"
import Diagnostics from "./pages/Diagnostics"
import AdminDashboard from "./pages/AdminDashboard"
import AdminLogin from "./pages/Adminlogin"
import ExploreNow from "./pages/ExploreNow"
import StaffAttendance from "./pages/StaffAttendance"

function App() {
  

  return (
    <>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginpage" element={<Login/>}/>
        <Route path ="/registerpage" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/laptop-services" element={<LaptopService/>}/>
        <Route path="/diagnostics" element={<Diagnostics/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/explorenow" element={<ExploreNow/>}/>
        <Route path="/staffattendance" element={<StaffAttendance/>}/>

        
      </Routes>
      
      <Footer/>
      
    </div>
    </>
  )
}

export default App
