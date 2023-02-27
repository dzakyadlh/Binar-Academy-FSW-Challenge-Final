import { useState, useEffect } from "react";
import * as React from "react";
import axios from "axios";
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
  const [gamelist, setGamelist] = useState([]);

  const handleFetch = () => {
    axios.get("http://localhost:5000/gamelist").then((res) => {
      setGamelist(res);
      console.log(res.data.result);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="container-game-list">
      <Typography variant="h3">Game List</Typography>
      {gamelist?.data?.result?.map((row, index) => (
        <Card
          key={index}
          sx={{ display: "flex", width: 1, minHeight: "400px" }}
        >
          <Box sx={{ width: "50%" }}>
            <CardContent>
              <Typography
                gutterBottom
                fontSize="96px"
                component="div"
                sx={{ width: 1, mb: 0 }}
                style={{ fontWeight: "bold" }}
              >
                {row.name}
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
                onClick={() => handleClick(`/gamedetails/${row.id}`)}
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
            image={row.image}
            title="game image"
            style={{ objectFit: "contain" }}
          />
        </Card>
      ))}
    </div>
  );
};

export default GameList;
