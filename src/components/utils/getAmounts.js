import { utils } from "ethers";

export const getEtherBalance = async (isExchangeContract) => {
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

export const getShareTokenBalance = async () => {
  const { data } = useWeb3();
  const stBalance = await data.ExchangeContract.balanceOf(data.account[0]);
  console.log("shareTokenbalance", utils.formatEther(stBalance));
  return stBalance;
};

export const getAcoTokenBalance = async () => {
  const { data } = useWeb3();
  const acoBalance = await data.TokenContract.balanceOf(data.account[0]);
  const reserve = await new data.ExchangeContract.getReserve();

  return utils.formatEther(acoBalance), reserve;
};
