import React from "react"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import About from "./components/About"
import Shop from "./pages/Shop"
import Support from "./pages/Support"
import AdminDashboard from "./pages/AdminDashboard"
import AdminLogin from "./pages/Adminlogin"
import ExploreNow from "./pages/ExploreNow"
import LaptopRepair from "./pages/LaptopRepair"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import KnowledgeBase from "./pages/KnowledgeBase"
import WarrantyRepairs from "./pages/WarrantyRepairs"
import MonthlySalary from "./pages/MonthlySalary"
import CalendarPage from "./pages/CalendarPage"
import AssignWork from "./pages/AssignWork"
import StaffAttendance from "./pages/StaffAttendance"
import { LocationProvider } from "./context/LocationContext"
import { CartProvider } from "./context/CartContext"

function App() {
  

  return (
    <>
    <LocationProvider>
    <CartProvider>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/knowledge-base" element={<KnowledgeBase/>}/>
        <Route path="/warranty-repairs" element={<WarrantyRepairs/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<AdminDashboard/>}/>
        <Route path="/explorenow" element={<ExploreNow/>}/>
        <Route path="/laptop-repair" element={<LaptopRepair/>}/>
        <Route path="/monthlysalary" element={<MonthlySalary/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/assignwork" element={<AssignWork/>}/>
        <Route path="/staffattendance" element={<StaffAttendance/>}/>

        
      </Routes>
      
      <Footer/>
      
    </div>
    </CartProvider>
    </LocationProvider>
    </>
  )
}

export default App
