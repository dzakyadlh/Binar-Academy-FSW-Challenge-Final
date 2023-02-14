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
import "./landing.css";
import { Container } from "react-bootstrap";

const LandingPage = () => {
  return (
    <Container>
      <Card
        sx={{
          display: "flex",
          width: 0.8,
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
              style={{ fontWeight: "bold" }}
            >
              Welcome!!
            </Typography>
            <p>
              Feel free to play games on our website after you are logged in !!
            </p>
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
      <div className="second-container">
        <Grid container spacing={24} sx={{ columnGap: "" }}>
          <Grid item xs={4}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ fontWeight: "bold" }}
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
                  width: "380px",
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
                  width: "380px",
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
                  width: "380px",
                  height: "300px",
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default LandingPage;
