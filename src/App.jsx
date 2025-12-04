import React from "react"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./components/About"
import Shop from "./pages/Shop"
import Support from "./pages/Support"
import AdminDashboard from "./pages/AdminDashboard"
import AdminLogin from "./pages/Adminlogin"
import ExploreNow from "./pages/ExploreNow"
import StaffAttendance from "./pages/StaffAttendance"
import LaptopRepair from "./pages/LaptopRepair"
import { LocationProvider } from "./context/LocationContext"

function App() {
  

  return (
    <>
    <LocationProvider>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/loginpage" element={<Login/>}/>
        <Route path ="/registerpage" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/support" element={<Support/>}/>
        
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/explorenow" element={<ExploreNow/>}/>
        <Route path="/staffattendance" element={<StaffAttendance/>}/>
        <Route path="/laptop-repair" element={<LaptopRepair/>}/>

        
      </Routes>
      
      <Footer/>
      
    </div>
    </LocationProvider>
    </>
  )
}

export default App
