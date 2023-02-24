import { useState } from "react";
import * as React from "react";
import {
  Card,
  Box,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import imgBp from "../../assets/Home_Page_Big_Picture.jpg";
import imgRps from "../../assets/RPS.png";
import imgNba from "../../assets/NBA2K23.jpg";
import imgVal from "../../assets/VALORANT.jpg";
import "./home.css";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="container-home">
        <Card
          sx={{
            display: "flex",
            width: 1,
            borderRadius: "10px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                sx={{ width: 1 }}
                style={{ fontWeight: "bold", color: "#5551FF" }}
              >
                <span style={{ color: "black" }}>Hi,</span> johndoe
              </Typography>
              <p>Start playing games on our website now!!</p>
            </CardContent>
            <CardActions style={{ marginBottom: "20px", marginTop: "30px" }}>
              <Button
                size="md"
                style={{
                  frontWeight: "bold",
                  backgroundColor: "black",
                  color: "white",
                  marginLeft: "10px",
                }}
              >
                about us
              </Button>
            </CardActions>
          </Box>
          <CardMedia
            sx={{
              width: "50%",
              height: "450px",
              maxWidth: "50%",
              backgroundPosition: "top",
            }}
            image={imgBp}
            style={{
              objectFit: "cover",
              borderRadius: "10px",
            }}
          ></CardMedia>
        </Card>
      </div>
      <div className="container-home-2">
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{
                    fontWeight: "bold",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                  component="div"
                >
                  Rock,Paper &Scissors
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={imgRps}
                style={{
                  padding: "20px 20px",
                  borderRadius: "25px",
                  height: "300px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ fontWeight: "bold" }}
                  component="div"
                >
                  NBA 2K23
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={imgNba}
                style={{
                  padding: "20px 20px",
                  borderRadius: "25px",
                  height: "300px",
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ fontWeight: "bold" }}
                  component="div"
                >
                  VALORANT
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt=""
                height="100%"
                image={imgVal}
                style={{
                  padding: "20px 20px",
                  borderRadius: "25px",
                  height: "300px",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
