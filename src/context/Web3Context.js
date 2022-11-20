import React, { createContext, useContext, useEffect, useState } from "react";

const Web3Context = createContext();

export const useWeb3 = () => {
  return useContext(Web3Context);
};
const Web3Provider = ({ children }) => {
  const { ethereum } = window;
  const [data, setData] = useState({
    ExchangeContract: "",
    TokenContract: "",
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
