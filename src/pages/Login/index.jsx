import { TextField, Button, CardContent, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./login.css";
import LogoImg from "../../assets/LOGO1.png";
import LoginImg from "../../assets/login.png";
import { useSelector, useDispatch } from "react-redux";
import { loginPost } from "./reducer";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const loginErr = useSelector((state) => state.login.error);

  const handleLogin = () => {
    const payload = { user, password };
    dispatch(loginPost(payload))
      .unwrap()
      .then(() => {
        Navigate("/home");
      });
  };

  useEffect(() => {
    setError(loginErr);
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [loginErr]);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
  };

  return (
    <div className="app-container">
      <CardContent
        sx={{
          paddingBottom: "100px",
          fontSize: "20px",
          width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          justifyContent: "center",
        }}
      >
        <img className="logoo" src={LogoImg} alt=""></img>
        <h1 className="login">Login</h1>
        <p>Login to access all the features</p>

        <TextField
          sx={{ marginTop: "15px" }}
          label="Email / Username"
          variant="standard"
          width="20px"
          fullWidth
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyUp={handleKeypress}
        />
        <TextField
          sx={{ marginTop: "15px" }}
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={handleKeypress}
        />
        <Button
          sx={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "15px",
            marginTop: "30px",
            width: "100%",
            maxWidth: "400px",
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <div className="signin">
          <span>
            doesn&apos;t have an account?{" "}
            <Link to="/register">register here</Link>
          </span>
        </div>
        {error && (
          <Alert sx={{ marginTop: "10px" }} severity="error">
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
