import React from "react";
import Web3Provider from "./components/context/Web3Context";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Liquidity from "./components/NavElements/Liquidity";
import Swap from "./components/NavElements/Liquidity";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/Liquidity" element={<Liquidity />}></Route>
            <Route exactpath="/Swap" element={<Swap />}></Route>

            <Route path="*" element={<p>Path not resolved</p>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
