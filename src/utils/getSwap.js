import { useWeb3 } from "../context/Web3Context";

export const getAmountFromSwap = async ({
  swapAmount,
  ethSelected,
  reserveACO,
  ethBalance,
}) => {
  // FIXME: Returns the same value for both ethSelected and !ethSelected
  const tokenAmount = ethSelected
    ? await data.ExchangeContract.amountCalculator(
        swapAmount,
        reserveACO,
        ethBalance
      )
    : await data.ExchangeContract.amountCalculator(
        swapAmount,
        reserveACO,
        ethBalance
      );
  return tokenAmount;
};

const Swap = async (ethSelected, swapAmount) => {
  const { data } = useWeb3();
  let tx;
  if (ethSelected) {
    tx = await data.ExchangeContract.ethToAco({ value: swapAmount });
  } else {
    tx = await data.TokenContract.approve(
      data.ExchangeContract.address,
      swapAmount
    );
    await tx.wait();
    tx = await data.ExchangeContract.AcoToEth(swapAmount);
    tx.wait();
  }
};
