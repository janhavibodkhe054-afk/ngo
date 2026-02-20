import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./component/ScrollToTop";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";
import Contact from "./pages/Contact";
import Program from "./pages/Program";
import GetInvolved from "./pages/GetInvolved";
import AOS from "aos";

function App() {

   useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/program" element={<Program />} />
        <Route path="/involve" element={<GetInvolved />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
