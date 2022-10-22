import { useWeb3 } from "./Web3Context";
import { Contract, ethers } from "ethers";
import {
  exchangeAdress,
  exchange_ABI,
  tokenAddress,
  token_ABI,
} from "../../constants";

const useWalletConnection = () => {
  const { ethereum } = window;
  const { data, setData } = useWeb3();
  const connect = async () => {
    try {
      if (window.ethereum !== undefined) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        const [account] = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const chainId = await ethereum.request({ method: "eth_chainId" });

        const TokenContract = new Contract(tokenAddress, token_ABI, provider);
        const ExchangeContract = new Contract(
          exchangeAdress,
          exchange_ABI,
          provider
        );
        console.log("token contract", TokenContract);
        console.log("-------------------------------");
        console.log("Exchange contract", ExchangeContract);
        if (chainId != 5) {
          alert("Change the network to goerli !");
        }

        setData({
          ...data,
          ExchangeContract: ExchangeContract,
          TokenContract: TokenContract,
          provider: provider,
          account: [account],
          chainId: chainId,
        });
      } else if (window.web3) {
        alert("update your metamask");
      } else {
        alert("please install metamask");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return connect;
};
export default useWalletConnection;
