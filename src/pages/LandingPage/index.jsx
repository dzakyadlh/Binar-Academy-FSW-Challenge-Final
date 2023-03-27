import * as React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames, data } from "./reducer";
import { useNavigate } from "react-router";
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
import "./landing.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const games = useSelector(data);
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(getGames());
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      <div className="container-lp">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                display: "flex",
                width: 1,
                borderRadius: "10px",
                height: "100%",
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
                    Feel free to play games on our website after you are logged
                    in !!
                  </p>
                </CardContent>
                <CardActions
                  style={{ marginBottom: "20px", marginTop: "30px" }}
                >
                  <Button
                    size="md"
                    style={{
                      frontWeight: "bold",
                      backgroundColor: "black",
                      color: "white",
                      marginLeft: "10px",
                    }}
                    onClick={() => handleClick("/about")}
                  >
                    about us
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              sx={{
                height: "450px",
                backgroundPosition: "top",
              }}
              image={imgBp}
              style={{
                objectFit: "cover",
                borderRadius: "10px",
              }}
            ></CardMedia>
          </Grid>
        </Grid>
      </div>
      <div className="container-lp-2">
        <Grid container spacing={3}>
          {games?.data?.result?.map((row, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
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
                    {row.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt=""
                  height="100%"
                  image={row.image}
                  style={{
                    padding: "20px 20px",
                    borderRadius: "25px",
                    height: "300px",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
