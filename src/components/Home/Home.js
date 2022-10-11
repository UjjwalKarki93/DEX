import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { TextField, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import WalletConnection from "../context/WalletConnection";

const Home = () => {
  return (
    <div className="homeContainer">
      <Box
        sx={{
          borderRadius: "30px",
          height: "300px",
          width: "500px",
          margin: "auto",
          marginTop: "55px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px ",
        }}
      >
        <div
          style={{
            // outline: "1px solid red",
            display: "flex",
            height: "fit-content",
            justifyContent: "space-between",
            margin: "10px",
            paddingRight: "50px",
            paddingLeft: "50px",
            color: "gray",
            fontWeight: "100",
          }}
        >
          <h3>Swap</h3>
          <p>
            <SettingsIcon />
          </p>
        </div>

        <Box
          className="boxes"
          sx={{
            height: "fit-content",
            // outline: "1px solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <div className="firstBox" style={{ margin: "5px" }}>
            <TextField
              placeholder="0.00"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              sx={{
                width: { sm: 200, md: 300 },
              }}
            ></TextField>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Number}
              sx={{ width: "fit-content", height: "40px", margin: "10px" }}
            >
              <MenuItem>eth</MenuItem>
              <MenuItem>eth</MenuItem>
              <MenuItem>eth</MenuItem>
            </Select>
          </div>
          <div>
            <Box sx={{ display: "flex", width: "100%" }}>
              <TextField
                placeholder="0.00"
                variant="outlined"
                label="Select Token"
                fullWidth
                multiline
                rows={1.5}
                sx={{
                  width: { sm: 200, md: 300 },
                }}
              ></TextField>

              <Select
                label="Select token"
                sx={{ width: "fit-content", height: "40px", margin: "10px" }}
              >
                <MenuItem>eth</MenuItem>
                <MenuItem>eth</MenuItem>
                <MenuItem>eth</MenuItem>
              </Select>
            </Box>
          </div>
        </Box>
        <WalletConnection />
      </Box>
    </div>
  );
};

export default Home;
