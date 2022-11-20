import { utils } from "ethers";
import { useWeb3 } from "./Web3Context";
const { data } = useWeb3();

export const removeLiquidity = async (STamount) => {
  const tx = await data.ExchangeContract.removeLiquidity(STamount);
  await tx.wait();
};

export const getTokensAfterRemove = async (
  STamount,
  ethBalance,
  ACOreserve
) => {
  const totalSupply = await data.ExchangeContract.totalSupply();
  const returnEther = ethBalance.mul(STamount).div(totalSupply);
  const returnACO = ACOreserve.mul(STamount).div(totalSupply);
};
