import React, { useContext } from "react";
import { useWeb3 } from "../context/Web3Context";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { data } = useWeb3();
  return (
    <div
      className="mainContainer"
      style={{
        // outline: "1px solid red",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 20px",
        alignItems: "center",
        backgroundColor: "#f7f0f6",
      }}
    >
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/1026px-Uniswap_Logo.svg.png"
          height={45}
          alt="logo"
        ></img>
      </div>
      <div
        style={{
          width: "200px",
          height: "40px",
          borderRadius: "20px",
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        <div>
          <Link to={"/swap"}>
            <Button style={{ color: "grey" }} variant={"soft"}>
              Swap
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/liquidity">
            <Button style={{ color: "grey" }} variant={"soft"}>
              Liquidity
            </Button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          height: "fit-content",
          width: "fit-content",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: "18px",
            gap: "5px",
            margin: "5px",
            width: "fit-content",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>{data.account}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
