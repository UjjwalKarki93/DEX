import React, { useEffect, useState } from "react";
import Swap from "../NavElements/Swap";
import {
  GetAcoTokenBalance,
  GetEtherBalance,
  GetShareTokenBalance,
  GetReserveOfACOTokens,
} from "../utils/GetAmounts";

const Main = () => {
  const [balance, setBalance] = useState({
    ethBalance: 0,
    acoBalance: 0,
    stBalance: 0,
    ethContractBalance: 0,
    reserveACO: 0,
  });

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
    console.log("balance", balance);
  };

  useEffect(() => {
    getBalances();
  }, []);
  return (
    <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
      <Swap balances={balance} />
    </div>
  );
};

export default Main;
