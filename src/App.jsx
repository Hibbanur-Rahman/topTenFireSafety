import React, { useState } from "react";
import "./assets/styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="fontFamily-poppins overflow-x-hidden w-full">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
      <Toaster/>
    </div>
  );
}

export default App;
