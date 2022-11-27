import { useWeb3 } from "../context/Web3Context";
import { utils } from "ethers";
/**
 *
 * @param {Boolean} isExchangeContract - boolean to determine if the balance is for the exchange contract or the user's account
 * @returns {Object} - returns the ether balance of the exchange contract or the user's account
 */
export const useEtherBalance = async (isExchangeContract) => {
  const { data } = useWeb3();
  const { ExchangeContract, account } = data;
  try {
    const balance = await data.provider.getBalance(
      isExchangeContract ? ExchangeContract.address : account[0]
    );
    console.log("ether balance", utils.formatEther(balance));
    return balance;
  } catch (e) {
    console.error(e);
  }
};
