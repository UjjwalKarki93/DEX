import { useWeb3 } from "../context/Web3Context";
import { utils } from "ethers";

export const GetEtherBalance = async (isExchangeContract) => {
  const { data } = useWeb3();
  if (isExchangeContract) {
    const balance = await data.provider.getBalance(
      data.ExchangeContract.address
    );
    console.log("ethbalance", utils.formatEther(balance));

    return balance;
  } else {
    const balance = await data.provider.getBalance(data.account[0]);
    console.log("ethbalance", utils.formatEther(balance));
    return balance;
  }
};

export const GetShareTokenBalance = async () => {
  const { data } = useWeb3();
  const stBalance = await data.ExchangeContract.balanceOf(data.account[0]);
  console.log("shareTokenbalance", utils.formatEther(stBalance));
  return stBalance;
};

export const GetAcoTokenBalance = async () => {
  const { data } = useWeb3();
  const acoBalance = await data.TokenContract.balanceOf(data.account[0]);
  console.log("acoBalance", utils.formatEther(acoBalance));
  return utils.formatEther(acoBalance);
};

export const GetReserveOfACOTokens = async () => {
  const { data } = useWeb3();
  const reserve = await new data.ExchangeContract.getReserve();
  console.log("ACOreserve", utils.formatEther(reserve));
  return reserve;
};
