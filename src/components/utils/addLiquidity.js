import { utils } from "ethers";
import { exchangeAdress } from "../../constants";
import { UseWeb3 } from "../context/Web3Context";

export const addLiquidity = async (AcoAmount, ethAmount) => {
  const { data } = UseWeb3();
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

export const calculateACO = async (
  _addEther = "0",
  ethReserve,
  ACOtokenReserve
) => {
  const addEther = utils.parseEther(_addEther);
  const ACOtokenAmount = addEther.mul(ACOtokenReserve).div(ethReserve);
  return ACOtokenAmount;
};
