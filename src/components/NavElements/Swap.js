import React, { useState } from "react";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Typography from "@mui/joy/Typography";
import useWalletConnection from "../../context/WalletConnection";
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

const Swap = (props) => {
  const [ethSelected, setEthSelected] = useState(false);
  const [swapAmount, setSwapAmount] = useState(0);

  const connect = useWalletConnection();
  return (
    <div className="homeContainer">
      {console.log(props)}
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
                value={swapAmount}
                onChange={(e) => setSwapAmount(e.target.value)}
              />
            </Box>
            <Box flex="3">
              <Select
                color="neutral"
                placeholder="Type"
                value={ethSelected ? "ETH" : "ACO"}
                onChange={(e) => setEthSelected(e.target.value)}
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
