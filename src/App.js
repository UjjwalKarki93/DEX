import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";
import { TransactionProvider } from "./components/context/TransactionContext";

const App = () => {
  return (
    <TransactionProvider>
      <div style={{ backgroundColor: " #f7f0f6", height: "100vh" }}>
        <Navbar />
        <Home />
      </div>
    </TransactionProvider>
  );
};

export default App;
