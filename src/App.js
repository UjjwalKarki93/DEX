import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Liquidity from "./components/NavElements/Liquidity";
import Swap from "./components/NavElements/Swap";
import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home";
import {
  GetEtherBalance,
  GetAcoTokenBalance,
  GetShareTokenBalance,
  GetReserveOfACOTokens,
} from "./components/utils/GetAmounts";

const App = () => {
  const [balance, setBalance] = useState({
    ethBalance: 0,
    acoBalance: 0,
    stBalance: 0,
    ethContractBalance: 0,
    reserveACO: 0,
  });

  const getBalances = async () => {
    console.log("inside get balances");
    const _ethBalance = await GetEtherBalance(false);
    const _cdBalance = await GetAcoTokenBalance();
    const _stBalance = await GetShareTokenBalance();
    const _reserveACO = await GetReserveOfACOTokens();
    setBalance({
      ...balance,
      ethBalance: _ethBalance,
      acoBalance: _cdBalance,
      stBalance: _stBalance,
      reserveACO: _reserveACO,
    });
  };

  useEffect(() => {
    getBalances();
  }, []);

  return (
    <>
      <Router>
        <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
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
    </>
  );
};

export default App;
