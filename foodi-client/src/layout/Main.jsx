import React from 'react';
import { Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
const Main = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </div>

  )
}

export default Main
