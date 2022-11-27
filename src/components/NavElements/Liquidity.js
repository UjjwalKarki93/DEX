import React, { useState } from "react";
import { utils } from "ethers";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/material";

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
const Liquidity = (props) => {
  const [ether, setEther] = useState(0);
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
            You have:
            <br />
            {utils.formatEther(props.balance.acoBalance)} ACO Tokens
            <br />
            {utils.formatEther(props.balance.ethBalance)} Ether
            <br />
            {utils.formatEther(props.balance.stBalance)} Share tokens
          </Flex>

          <Flex gap="10px">
            <Box flex="7">
              <input
                placeholder="Ether Amount"
                onChange={(e) => setEther(e.target.value)}
              ></input>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Liquidity;
