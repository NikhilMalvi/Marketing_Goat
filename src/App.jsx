import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <div className="relative">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
