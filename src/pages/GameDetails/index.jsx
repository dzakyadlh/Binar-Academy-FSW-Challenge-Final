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
import { useSelector, useDispatch } from "react-redux";
import { getGameDetails, data } from "./reducer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {BigPlayButton, Player} from "video-react"
import "./video-react.css"
import "./style.css";

const GameDetail = () => {
  const gameDetail = useSelector(data);
  const dispatch = useDispatch();
  let { id } = useParams();
  const[player, setPlayer] = useState()
  const [modal, setModal] = useState(false);

  const handleFetch = () => {
    dispatch(getGameDetails(id));
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <div className="container-gd">
      <Card sx={{ display: "flex", width: 1, height: "450px" }}>
        <Box sx={{ maxWidth: 1 / 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ width: 1, ml: 1 }}
              style={{ fontWeight: "bold" }}
            >
              {gameDetail?.data?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ width: 0.9, ml: 1 }}
            >
              {gameDetail?.data?.detail}
            </Typography>
          </CardContent>
          <CardActions style={{ marginBottom: "20px", marginTop: "20px" }}>
            <Button
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
                width: "40%",
              }}
              sx={{ ml: 1 }}
            >
              <Link to="/rps">PLAY GAME</Link>
            </Button>
            <Button 
              size="md"
              style={{
                fontWeight: "bold",
                backgroundColor: "black",
                color: "white",
                width: "40%",
              }}
              onClick={toggleModal} 
              sx={{ ml: 1 }}
            >
              Play Trailer
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
          image={gameDetail?.data?.image}
          style={{ objectFit: "contain", borderRadius: "10px 0 0 10px" }}
        >      
        </CardMedia>  
      </Card>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Game Trailer</h2>
            <Player
            ref={(player)=> {
              setPlayer(player)
            }}
            poster={gameDetail?.data?.image}
            src={gameDetail?.data?.video}
            >
            <BigPlayButton position="center"/>
            </Player>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetail;
