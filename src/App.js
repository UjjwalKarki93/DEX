import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Liquidity from "./components/NavElements/Liquidity";
import Swap from "./components/NavElements/Swap";
import Home from "./components/Home";
import { useShareToken } from "./Hooks/useShareToken";
import { useEtherBalance } from "./Hooks/useEtherBalance";
import { useACOToken } from "./Hooks/useACOToken";

const App = () => {
  const [balance, setBalance] = useState({
    ethBalance: 0,
    acoBalance: 0,
    stBalance: 0,
    ethContractBalance: 0,
    reserveACO: 0,
  });

  const { balance: ethBalance } = useEtherBalance();
  const { balance: acoBalance, reserve: reserveACO } = useACOToken();
  const { balance: stBalance } = useShareToken();

  useEffect(() => {
    setBalance({
      ethBalance,
      acoBalance,
      stBalance,
      reserveACO,
    });
  }, [ethBalance, acoBalance, stBalance, reserveACO]);

  return (
    <Router>
      <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
        <Navbar />
        <Routes>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/liquidity">
            <Liquidity balance={balance} />
          </Route>
          <Route exact path="/swap">
            <Swap balance={balance} />
          </Route>
          <Route path="*">
            <p>Path not resolved</p>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
