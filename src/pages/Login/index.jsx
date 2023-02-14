import {
  TextField,
  Button,
  CardContent,
  Alert,
  makeStyles,
} from "@mui/material";
import { useState, useEffect, Redirect } from "react";
import { useNavigate } from "react-router";
import "./login.css";
import LogoImg from "../../assets/LOGO1.png";
import LoginImg from "../../assets/login.png";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const token = localStorage.getItem("token");

  const url = window.location.pathname;
  console.log(token);

  const handleLogin = () => {
    const payload = { email, password };
    axios
      .post("http://localhost:5000/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", res.data.data.token);
        console.log(res.data.data.token);
        setSuccess(res.data.status);

        setTimeout(() => {
          setSuccess("");
          Navigate("/");
        }, 2000);
      })

      .catch((err) => {
        setError(err.response.data.msg);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  return (
    <div className="app-container">
      <CardContent
        style={{
          paddingBottom: "100px",
          fontSize: "20px",
          width: "400px",
          justifyContent: "center",
        }}
      >
        <div className="logoo">
          <img src={LogoImg} alt="" width="180px"></img>
        </div>
        <h1>Login</h1>
        <p>Login to access all the features</p>
        <TextField
          style={{ marginTop: "15px" }}
          label="Email"
          variant="standard"
          width="20px"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          style={{ marginTop: "15px" }}
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "15px",
            marginTop: "30px",
            width: "400px",
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <div className="signin">
          <span>
            doesn't have an account?{" "}
            <a href="http://localhost:3000/register">register here</a>
          </span>
        </div>
        {success && (
          <Alert style={{ marginTop: "10px" }} severity="success">
            {success}
          </Alert>
        )}
        {error && (
          <Alert style={{ marginTop: "20px" }} severity="error">
            {error}
          </Alert>
        )}
      </CardContent>
      <div className="right">
        <img src={LoginImg} alt=""></img>
      </div>
    </div>
  );
};

export default Login;
