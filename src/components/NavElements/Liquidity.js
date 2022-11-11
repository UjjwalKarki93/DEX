import React, { useState } from "react";
import { utils, BigNumber } from "ethers";
import { SettingsOutlined, CloseRounded } from "@mui/icons-material";
import { Box, TextField, Select, Option, Button, Alert } from "@mui/joy";
import { Typography } from "@mui/material";

import useWalletConnection from "../context/WalletConnection";
import {
  GetAcoTokenBalance,
  GetShareTokenBalance,
  GetEtherBalance,
} from "../utils/GetAmounts";
// import { addLiquidity, calculateACO } from "../utils/AddLiquidity";

const Container = (props) => (
  <Box width="calc(100% - 50px)" mx="auto" {...props} />
);

const Flex = ({ column, aiCenter, jcCenter, center, ...rest }) => (
  <Box
    display="flex"
    flexDirection={column ? "column" : "row"}
    alignItems={rest.alignItems || center || (aiCenter && "center")}
    justifyContent={rest.justifyContent || center || (jcCenter && "center")}
    {...rest}
  />
);
const Liquidity = () => {
  const zero = BigNumber.from(0);
  //balances of user's account
  const [balance, setBalance] = useState({
    ethBalance: zero,
    acoBalance: zero,
    stBalance: zero,
  });
  const connect = useWalletConnection();
  const [addEther, setEther] = useState(0);
  const [addACOtokens, setAco] = useState(0);

  const GetBalances = async () => {
    const _ethBalance = await GetEtherBalance(false);
    const _cdBalance = await GetAcoTokenBalance();
    const _lpBalance = await GetShareTokenBalance();
    setBalance({
      ...balance,
      ethBalance: _ethBalance,
      acoBalance: _cdBalance,
      stBalance: _lpBalance,
    });
    console.log("balance", balance);
  };

  // const _addLiquidity = async () => {
  //   try {
  //     const addEther = utils.parseEther(addEther.toString());
  //     if (addEther !== 0 && addACOtokens !== 0) {
  //       await addLiquidity(addEther, addACOtokens);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <div className="homeContainer">
      <Flex
        m="auto"
        mt="55px"
        bgcolor="white"
        boxShadow="lg"
        width="500px"
        borderRadius="lg"
        py="25px"
        aiCenter
      >
        <Flex component={Container} column height="100%" gap="20px">
          <Flex mb="15px" aiCenter justifyContent="space-between">
            <Typography color="neutral.700" variant="h3">
              Liquidity
            </Typography>

            <Box component={SettingsOutlined} color="neutral.700" />
          </Flex>

          <Flex>
            {console.log(GetBalances())}
            You have:
            <br />
            {utils.formatEther(balance.acoBalance)} ACO Tokens
            <br />
            {utils.formatEther(balance.ethBalance)} Ether
            <br />
            {utils.formatEther(balance.stBalance)} Share tokens
          </Flex>

          <Flex gap="10px">
            <Box flex="7">
              <input
                placeholder="Ether Amount"
                onChange={(e) => setEther(e.target.value)}
              ></input>
            </Box>
          </Flex>
          <Flex justifyContent="flex-end" gap="10px">
            <Button variant="plain" color="danger">
              Reset
            </Button>
            <Button variant="soft" onClick={connect}>
              Connect Wallet
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Liquidity;
