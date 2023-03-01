import { Link } from "react-router-dom";

import * as React from "react";
import "./404.css";
import logoIMG from "../../assets/LOGO_404.png";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      <div className="notfound-container">
        <div className="img-container">
          <img className="logo-img" src={logoIMG} alt="logo"></img>
        </div>
        <div className="text-container">
          <Typography variant="h3">404</Typography>
          <h3>Oops! page not found!</h3>
        </div>
        <div className="btn-container">
          <Button
            size="md"
            style={{
              width: "300px",
              fontWeight: "bolder",
              backgroundColor: "#FBFF51",
              color: "black",
              marginLeft: "10px",
            }}
            onClick={() => handleClick(`/home`)}
          >
            BACK TO HOME PAGE
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
