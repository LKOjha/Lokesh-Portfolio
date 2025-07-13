// App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import { Toaster } from 'react-hot-toast';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat scroll-smooth snap-y snap-mandatory  "
      // style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
