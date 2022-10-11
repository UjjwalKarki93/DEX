import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import Web3Provider from "./components/context/Web3Context";

const App = () => {
  return (
    <div style={{ backgroundColor: " #f7f0f6", height: "100vh" }}>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
