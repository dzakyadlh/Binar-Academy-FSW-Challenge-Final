import { useState, useEffect } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imgRPS from "../../assets/RPS.png";
import imgNBA from "../../assets/NBA2K23.jpg";
import { useNavigate } from "react-router";

import "./style.css";
import { Container } from "react-bootstrap";

const GameList = () => {
  // const [data, setData] = useState([]);

  // const fetchData = () => {
  //     fetch("http://localhost:5000/gamelist/get")
  //     .then((response) => response.json())
  //     .then((result) => {
  //         setData(result.data);
  //     });
  // };

  // useEffect(() => {
  //     fetchData();
  // }, []);

  // console.log(data);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container-game-list">
      <Typography variant="h3">Game List</Typography>
      <Card sx={{ display: "flex", width: 1, minHeight: "400px" }}>
        <Box sx={{ maxWidth: 1 / 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              fontSize="96px"
              component="div"
              sx={{ width: 1, mb: 0 }}
              style={{ fontWeight: "bold" }}
            >
              Rock Paper Scissors Game
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={() => handleClick("/gamedetails")}
            >
              Details
            </Button>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "#FBFF51",
                color: "black",
                width: "40%",
                marginLeft: "20px",
              }}
            >
              <a href="/rps">PLAY GAME</a>
            </Button>
          </CardActions>
        </Box>
        <CardMedia
          sx={{
            maxWidth: 1 / 2,
            backgroundSize: "cover",
            height: "inherit",
            width: "inherit",
          }}
          image={imgRPS}
          title="game image"
          style={{ objectFit: "contain" }}
        />
      </Card>
      <Card sx={{ display: "flex", width: 1, minHeight: "400px" }}>
        <Box sx={{ width: "50%" }}>
          <CardContent>
            <Typography
              gutterBottom
              fontSize="96px"
              component="div"
              sx={{ width: 1, mb: 0 }}
              style={{ fontWeight: "bold" }}
            >
              NBA 2K23
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={() => handleClick("/gamedetails")}
            >
              Details
            </Button>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "#FBFF51",
                color: "black",
                width: "40%",
                marginLeft: "20px",
              }}
            >
              PLAY GAME
            </Button>
          </CardActions>
        </Box>
        <CardMedia
          sx={{
            maxWidth: 1 / 2,
            backgroundSize: "cover",
            height: "inherit",
            width: "inherit",
          }}
          image={imgNBA}
          title="game image"
          style={{ objectFit: "contain" }}
        />
      </Card>
    </div>
  );
};

export default GameList;
