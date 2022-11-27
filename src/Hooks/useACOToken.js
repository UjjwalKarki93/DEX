import { utils } from "ethers";
import { useWeb3 } from "../context/Web3Context";

export const useACOToken = async () => {
  const { data } = useWeb3();
  try {
    const balance = await data.TokenContract.balanceOf(data.account[0]);
    const reserve = await data.ExchangeContract.getReserve();
    console.log(
      "aco balance",
      utils.formatEther(balance),
      "aco reserve",
      utils.formatEther(reserve)
    );
    return { balance, reserve };
  } catch (e) {
    console.error(e);
  }
};
