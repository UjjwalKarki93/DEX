import React, { useState, useEffect } from "react";
import { BigNumber, utils } from "ethers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Liquidity from "./components/NavElements/Liquidity";
import Swap from "./components/NavElements/Swap";
import Home from "./components/Home";
import { useShareToken } from "./Hooks/useShareToken";
import { useEtherBalance } from "./Hooks/useEtherBalance";
import { useACOToken } from "./Hooks/useACOToken";
import useWalletConnection from "./context/WalletConnection";

const App = () => {
  const zero = BigNumber.from(0);
  const [balance, setBalance] = useState({
    ethBalance: zero,
    acoBalance: zero,
    stBalance: zero,
    ethContractBalance: zero,
    reserveACO: zero,
  });
  const connect = useWalletConnection();
  const _ethBalance = useEtherBalance(false).then((result) => {
    return result.data;
  });
  // const { _acoBalance, _reserveACO } = useACOToken();
  // const _stBalance = useShareToken();

  useEffect(async () => {
    connect();
    setBalance({
      ...balance,
      ethBalance: _ethBalance,
      // acoBalance: _acoBalance,
      // stBalance: _stBalance,
      // reserveACO: _reserveACO,
    });

    console.log("ethBalance", balance.ethBalance);
  }, []);

  return (
    <Router>
      <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Swap balance={balance} />}></Route>
          <Route
            exact
            path="/swap"
            element={<Swap balance={balance} />}
          ></Route>
          <Route
            path="/Liquidity"
            element={<Liquidity balance={balance} />}
          ></Route>

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
