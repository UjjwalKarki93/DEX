import { useWeb3 } from "../context/Web3Context";

const GetAmountsFromSwap = async (
  swapAmount,
  ethBalance,
  reserveACO,
  ethSelected
) => {
  const { data } = useWeb3();
  let tokenAmount;
  //if eth is selected then swapamount = eth else swapamount = acotoken
  if (ethSelected) {
    tokenAmount = await data.ExchangeContract.amountCalculator(
      swapAmount,
      ethBalance,
      reserveACO
    );
  } else {
    tokenAmount = await data.ExchangeContract.amountCalculator(
      swapAmount,
      reserveACO,
      ethBalance
    );
  }
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
