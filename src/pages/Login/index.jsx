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
import { useSelector, useDispatch } from "react-redux";
import { loginPost, data } from "./reducer";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector(data);
  const loginErr = useSelector((state) => state.login.error);

  const handleLogin = () => {
    const payload = { user, password };
    dispatch(loginPost(payload))
      .unwrap()
      .then(() => Navigate("/home"));
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleLogin();
    }
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
          label="Email / Username"
          variant="standard"
          width="20px"
          fullWidth
          value={user}
          onChange={(e) => setUser(e.target.value)}
          onKeyUp={handleKeypress}
        />
        <TextField
          style={{ marginTop: "15px" }}
          label="Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyUp={handleKeypress}
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
        {login.status === "error" && loginErr && (
          <Alert style={{ marginTop: "10px" }} severity="error">
            {loginErr}
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
