import React, { useEffect, useState } from "react";
import { useACOToken } from "../../Hooks/useACOToken";
import { useEtherBalance } from "../../Hooks/useEtherBalance";
import { useShareToken } from "../../Hooks/useShareToken";

import Swap from "../NavElements/Swap";

const Main = () => {
  const [balance, setBalance] = useState({
    ethContractBalance: 0,
    ethBalance: 0,
    // TODO: ^^ Redundant state. Remove one of these as both of them get assigned same value.
    acoBalance: 0,
    stBalance: 0,
    reserveACO: 0,
  });
  const ethBalance = useEtherBalance();
  const { balance: acoBalance, reserve: reserveACO } = useACOToken();
  const { balance: stBalance } = useShareToken();

  useEffect(() => {
    setBalance({
      ethContractBalance: ethBalance,
      ethBalance,
      acoBalance,
      stBalance,
      reserveACO,
    });
  }, [ethBalance, acoBalance, stBalance, reserveACO]);

  return (
    <div style={{ height: "100vh", backgroundColor: "#f7f0f6" }}>
      <Swap balances={balance} />
    </div>
  );
};

export default Main;
