import React from "react";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
