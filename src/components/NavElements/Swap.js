import React, { useState } from "react";
import { utils } from "ethers";
import { SettingsOutlined, CloseRounded } from "@mui/icons-material";
import { Box, TextField, Select, Option, Button, Alert } from "@mui/joy";
import { Typography } from "@mui/material";
import { useWeb3 } from "../context/Web3Context";
import useWalletConnection from "../context/WalletConnection";

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
//nishan feature branch
const Swap = (props) => {
  const [ethSelected, setSelection] = useState();
  const [swapAmount, setAmount] = useState(0);
  const connect = useWalletConnection();

  //  const getAmountFromSwap=async(amount)=>{
  //   try{
  //     const swapamount = utils.parseEther(amount.toString());
  //     if(swapamount != 0){

  //     }
  //   }
  //  }

  return (
    <div className="homeContainer">
      {console.log(useWalletConnection())}
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
              Swap
            </Typography>
            <Box component={SettingsOutlined} color="neutral.700" />
          </Flex>

          <Flex gap="10px">
            <Box flex="7">
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                placeholder="Amount"
                onChange={async (e) => {
                  setAmount(e.target.value);
                  // await getAmountFromSwap(e.target.value);
                }}
              />
            </Box>
            <Box flex="3">
              <Select
                color="neutral"
                placeholder="Type"
                onChange={async (e) => {
                  setSelection(!ethSelected);

                  console.log("selection", ethSelected);
                }}
              >
                <Option value="ETH">ETH</Option>
                <Option value="ACO">ACO</Option>
              </Select>
            </Box>
          </Flex>
          <Box>{ethSelected ? `You will get ACO` : `You will get Ether`}</Box>
          <Flex>
            <Button variant="soft" onClick={connect}>
              SWAP
            </Button>
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

export default Swap;
