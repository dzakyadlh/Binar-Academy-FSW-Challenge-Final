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

  return (
    <Container>
      <Typography variant="h3">Game List</Typography>
      <Card sx={{ display: "flex", width: 0.8 }}>
        <Box sx={{ maxWidth: 1 / 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ width: 1 }}
              style={{ fontWeight: "bold" }}
            >
              Rock Paper Scissors Game
            </Typography>
          </CardContent>
          <CardActions style={{ marginBottom: "20px", marginTop: "30px" }}>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
                marginLeft: "10px",
              }}
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
          image={imgRPS}
          title="game image"
          style={{ objectFit: "contain" }}
        />
      </Card>
      {/* <Box>
            <Card sx={{ maxWidth: 1 }}>
                <CardMedia
                sx={{ height: 200 }}
                image={imgRPS}
                title="game image"
                style={{objectFit: "contain"}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div" sx={{width: 1/3}} style={{fontWeight: "bold"}}>
                    Rock Paper Scissors Game
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{width: 1/2}}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, 
                    odio nesciunt quidem eos aperiam, obcaecati quis dolores ex, dolore alias molestias quisquam ratione repellendus. Quae exercitationem voluptatibus minus illum necessitatibus.
                    </Typography>
                </CardContent>
                <CardActions style={{marginBottom: "40px"}}>
                    <Button 
                    size="md"
                    style={{fontWeight: "bold", backgroundColor: "black", color: "white", marginLeft: "10px"}}
                    >Details</Button>
                    <Button 
                    size="md" 
                    style={{fontWeight: "bold", backgroundColor: "#FBFF51", color: "black", width: "20%", marginLeft: "20px"}}
                    >PLAY GAME</Button>
                </CardActions>
            </Card>
        </Box> */}
    </Container>
  );
};

export default GameList;
