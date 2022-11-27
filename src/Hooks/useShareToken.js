import { useWeb3 } from "../context/Web3Context";
import { utils } from "ethers";

export const useShareToken = async () => {
  const { data } = useWeb3();
  try {
    const balance = await data.ExchangeContract.balanceOf(data.account[0]);
    const totalSupply = await data.ExchangeContract.totalSupply();
    console.log(
      "st balance",
      utils.formatEther(balance),
      "st supply",
      utils.formatEther(totalSupply)
    );
    return { balance, totalSupply };
  } catch (e) {
    console.error(e);
  }
};
