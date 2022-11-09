import { utils } from "ethers";
import { exchangeAdress } from "../../constants";
import { useWeb3 } from "../context/Web3Context";
const { data } = useWeb3();

export const addLiquidity = async (AcoAmount, ethAmount) => {
  try {
    let tx = await data.TokenContract.approve(
      exchangeAdress,
      AcoAmount.toString()
    );
    await tx.wait();

    tx = await data.ExchangeContract.addLiquidity(AcoAmount, {
      value: utils.parseEther(ethAmount),
    });
    await tx.wait();
  } catch (e) {
    console.error(e);
  }
};
