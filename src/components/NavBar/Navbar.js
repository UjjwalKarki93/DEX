import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Navbar = () => {
  // const [selected, setSelected] = useState("pool");

  return (
    <div
      className="mainContainer"
      style={{
        // outline: "1px solid red",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0px 25px",
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
          width: "300px",
          height: "40px",
          borderRadius: "20px",
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {/* <div
          onClick={() => setSelected("swap")}
          className={`${setstyle.navItem} ${
            selected === "pool" && setstyle.activeNavItem
          }`}
        >
          swap
        </div> */}

        <div>
          <Button style={{ color: "grey" }}>Swap</Button>
        </div>

        <div>
          <Button style={{ color: "grey" }}>Pool</Button>
        </div>
        <div>
          <Button style={{ color: "grey" }}>Vote</Button>
        </div>

        <div>
          <Button style={{ color: "grey" }}>
            Charts <ArrowOutwardIcon />
          </Button>{" "}
        </div>

        {/* <Button>
          Charts <ArrowOutwardIcon />
        </Button> */}
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
            padding: "10px",
            width: "fit-content",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <img
            src="https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png"
            height={20}
            alt="img"
          ></img>
          <div>
            {/* <Button
              style={{
                width: "fit-content",
                height: "fit-content",
              }}
            > */}
            <select style={{ border: "none", outline: "none" }}>
              <option> Etherum</option>
              <option>brave</option>
              <option>sol</option>
            </select>
            {/* </Button> */}
          </div>
        </div>
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
          <Button
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              color: "#1C2023",
            }}
          >
            connect wallet
          </Button>
        </div>
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
          <Button
            style={{
              backgroundColor: "white",
              borderRadius: "18px",
              color: "#1C2023",
            }}
          >
            <MoreHorizIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
