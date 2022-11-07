import React, { useState } from "react";
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
const Liquidity = () => {
  const [selectValue, setSelectValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [success, setSuccess] = useState(false);

  const { data } = useWeb3();
  const connect = useWalletConnection();
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
          {success && (
            <Alert
              variant="soft"
              color="success"
              endDecorator={
                <Box
                  component={CloseRounded}
                  onClick={() => setSuccess((prev) => !prev)}
                />
              }
            >
              Successfully Connected!
            </Alert>
          )}
          <Flex gap="10px">
            <Box flex="7">
              <TextField fullWidth variant="outlined" placeholder="Token" />
            </Box>
            <Box flex="3">
              <Select color="neutral" placeholder="Source">
                <Option value="ETH">Eth</Option>
                <Option value="NBUS">NBUS</Option>
              </Select>
            </Box>
          </Flex>
          <Flex gap="10px">
            <Box flex="7">
              <TextField fullWidth variant="outlined" placeholder="Token" />
            </Box>
            <Box flex="3">
              <Select color="neutral" placeholder="Target">
                <Option value="ETH">Eth</Option>
                <Option value="NBUS">NBUS</Option>
              </Select>
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
