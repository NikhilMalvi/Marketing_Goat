import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="relative">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
