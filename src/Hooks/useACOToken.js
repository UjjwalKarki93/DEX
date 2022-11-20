import { useWeb3 } from "../context/Web3Context";

export const useACOToken = async () => {
  const { data } = useWeb3();
  try {
    const balance = await data.ACOContract.balanceOf(data.account[0]);
    const reserve = await data.ExchangeContract.getReserve();
    return { balance, reserve };
  } catch (e) {
    console.error(e);
  }
};
