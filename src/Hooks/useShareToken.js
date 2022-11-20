import { useWeb3 } from "../context/Web3Context";

export const useShareToken = async () => {
  const { data } = useWeb3();
  try {
    const balance = await data.ShareTokenContract.balanceOf(data.account[0]);
    const totalSupply = await data.ShareTokenContract.totalSupply();
    return { balance, totalSupply };
  } catch (e) {
    console.error(e);
  }
};
