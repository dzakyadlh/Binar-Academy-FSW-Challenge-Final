import { Button, Card, CardContent, TextField, Alert } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./register.css";
import LogoImg from "../../assets/LOGO1.png";
import RegisImg from "../../assets/register.png";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleRegister = () => {
    const payload = { username, email, password };
    axios
      .post("http://localhost:5000/auth/register", payload)
      .then((res) => {
        setSuccess(res.data.status);

        setTimeout(() => {
          setSuccess("");
          Navigate("/login");
        }, 2000);

        setTimeout(() => {});
      })

      .catch((err) => {
        setError(err.response.data.msg);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleRegister();
    }
  };

  return (
    <div className="app-container">
      <CardContent
        style={{
          paddingBottom: "150px",
          fontSize: "20px",
          width: "400px",
          justifyContent: "center",
        }}
      >
        <div className="logoo">
          <img src={LogoImg} alt="" width="180px"></img>
        </div>
        <h1>Create an account</h1>
        <p>Create an account to access all the features</p>

        <TextField
          style={{ marginTop: "15px" }}
          label="Username"
          variant="standard"
          width="20px"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={handleKeypress}
        />
        <TextField
          style={{ marginTop: "15px" }}
          label="Email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleRegister}
        >
          Create Account{" "}
        </Button>
        <div className="signin">
          <span>
            already have an account?{" "}
            <a href="http://localhost:3000/login">log in</a>
          </span>
        </div>
        {success && (
          <Alert style={{ marginTop: "10px" }} severity="success">
            {success}
          </Alert>
        )}
        {error && (
          <Alert severity="error" style={{ marginTop: "10px" }}>
            {error}
          </Alert>
        )}
      </CardContent>
      <div className="rightS">
        <img src={RegisImg} alt=""></img>
      </div>
    </div>
  );
};

export default Register;
