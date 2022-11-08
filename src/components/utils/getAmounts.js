import { useWeb3 } from "./Web3Context";
const { data } = useWeb3();

export const getEtherBalance = async (isExchangeContract = false) => {
  if (isExchangeContract) {
    const balance = await data.provider.getBalance(data.ExchangeContract);
    return balance;
  } else {
    const balance = await data.provider.getBalance(data.account);
    return balance;
  }
};

export const getShareTokenBalance = async () => {
  const stBalance = await data.ExchangeContract.balanceOf(data.account);
  return stBalance;
};

export const getAcoTokenBalance = async () => {
  const acoBalance = await data.TokenContract.balanceOf(data.account);
  return acoBalance;
};

export const getReserveOfACOTokens = async () => {
  const reserve = await ExchangeContract.getReserve();
  return reserve;
};
