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
import useWalletConnection from "./components/context/WalletConnection";
import { useWeb3 } from "./components/context/Web3Context";

const App = () => {
  const connect = useWalletConnection();
  const { data } = useWeb3();
  const [isClicked, setClick] = useState(false);
  //to re-render this component when either operation is performed from swap or liquidity component side
  const [renderStatus, setRender] = useState(false);
  const [balance, setBalance] = useState({
    ethBalance: 0,
    acoBalance: 0,
    stBalance: 0,
    ethContractBalance: 0,
    reserveACO: 0,
  });

  //updates state and make this component re-render so that when any operation is performed on swap or liquiduty side, it make this comp to rerender to get updated balances
  const handleRender = () => {
    setRender(!renderStatus);
  };

  const getBalances = async () => {
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

  const clickHandler = () => {
    connect();
    setClick(!isClicked);
  };

  useEffect(() => {
    getBalances();
  }, []);

  return (
    <>
      <Router>
        <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
          <Navbar />
          <div
            style={{
              display: "flex",
              borderRadius: "18px",
              gap: "5px",
              margin: "5px",
              width: "fit-content",
              height: "fit-content",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isClicked ? (
              <div>
                {console.log("balance from app.js", balance)}
                <p>{data.account}</p>
              </div>
            ) : (
              <button onClick={clickHandler}>Connect Wallet</button>
            )}
          </div>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              exact
              path="/swap"
              element={<Swap balance={balance} renderHandler={handleRender} />}
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
