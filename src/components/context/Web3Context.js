import React, { createContext, useEffect, useState } from "react";
export const Web3Context = createContext();

const Web3Provider = ({ children }) => {
  const { ethereum } = window;
  const [data, setData] = useState({
    contract: "",
    provider: "",
    account: "",
    chainId: "",
  });

  useEffect(() => {
    ethereum.on("accountsChanged", (accounts) => {
      setData({ ...data, account: accounts[0] });
    });

    ethereum.on("chainChanged", (_chainId) =>
      setData({ ...data, chainId: _chainId })
    );
  }, [data.account, data.chainId]);
  return (
    <Web3Context.Provider value={{ data, setData }}>
      {children}
    </Web3Context.Provider>
  );
};
export default Web3Provider;
