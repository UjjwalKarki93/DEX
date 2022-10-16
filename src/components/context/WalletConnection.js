import { useContext } from "react";
import { Web3Context } from "./Web3Context";
import { Contract, ethers } from "ethers";
import { Button, Alert } from "@mui/material";
import {
  exchangeAdress,
  exchange_ABI,
  tokenAddress,
  token_ABI,
} from "../../constants";

const WalletConnection = () => {
  const { ethereum } = window;
  const { data, setData } = useContext(Web3Context);
  const connect = async () => {
    try {
      if (window.ethereum != undefined) {
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

  return (
    <div>
      {data.provider ? (
        <div>
          <Alert variant="filled" severity="success">
            Successfully Connected!
          </Alert>
          {/* <p>Address: {data.account}</p>
          <p>Chain ID: {parseInt(data.chainId, 16)}</p> */}
        </div>
      ) : (
        <Button
          variant="error.light"
          sx={{
            ":hover": {
              bgcolor: "#FCDCE8", // theme.palette.primary.main
              color: "#DF3B89",
            },
            backgroundColor: "#FDD3DF",
            color: "#DF3B89",
            borderColor: "green",
            margin: "15px",
            height: "40px",
            width: "250px",
            borderRadius: "18px",
          }}
          onClick={connect}
        >
          connect wallet
        </Button>
      )}
    </div>
  );
};
export default WalletConnection;
