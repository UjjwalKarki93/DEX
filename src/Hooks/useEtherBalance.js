import { useWeb3 } from "../context/Web3Context";
/**
 *
 * @param {Boolean} isExchangeContract - boolean to determine if the balance is for the exchange contract or the user's account
 * @returns {Object} - returns the ether balance of the exchange contract or the user's account
 */
export const useEtherBalance = async (isExchangeContract) => {
  const { data } = useWeb3();
  const {
    provider: { getBalance },
    exchangeContractAddress,
    account,
  } = data;
  try {
    const balance = await getBalance(
      isExchangeContract ? exchangeContractAddress : account[0]
    );
    return balance;
  } catch (e) {
    console.error(e);
  }
};
