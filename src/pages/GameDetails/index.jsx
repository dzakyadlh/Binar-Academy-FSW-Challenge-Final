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

import "./style.css";
import { Container } from "react-bootstrap";

const GameDetail = () => {
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

  return (
    <Container>
      <Card sx={{ display: "flex", width: 0.83, height: "600px" }}>
        <Box sx={{ maxWidth: 1 / 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ width: 1 }}
              style={{ fontWeight: "bold", marginLeft: "15px" }}
            >
              Rock Paper Scissors Game
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              style={{ marginLeft: "15px" }}
              sx={{ width: 1 }}
            >
              The classic game that you have been playing since you were 5 ! the
              rules are simple, 2 players choose their gesture, rock beats
              scissors, scissors beats paper, and paper beats rock. Win to earn
              points !! and see yourself on the leaderboard.
            </Typography>
          </CardContent>
          <CardActions style={{ marginBottom: "20px", marginTop: "30px" }}>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
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
          image={imgRPS}
          title="game image"
          style={{ objectFit: "contain", borderRadius: "10px 0 0 10px" }}
        />
      </Card>
    </Container>
  );
};

export default GameDetail;
