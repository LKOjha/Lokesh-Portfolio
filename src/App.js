import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-no-repeat scroll-smooth snap-y snap-mandatory">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      
      <AnimatePresence mode="wait">
        {/* The 'location' and 'key' are vital for AnimatePresence to work */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          {/* CORRECT WAY: 
            Wrap the page and the background inside a single parent element 
            assigned to the 'element' prop.
          */}
          {/* <Route 
            path="/contact2" 
            element={
              
              // <div className='relative z-0 bg-black'>
              //   <Contact2 />
              //   <StarsCanvas />
              // </div>
            }  */}
          {/* /> */}
        </Routes>
      </AnimatePresence>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;