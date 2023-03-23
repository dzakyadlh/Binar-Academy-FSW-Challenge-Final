import { Button, Card, CardContent, TextField, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./register.css";
import LogoImg from "../../assets/LOGO1.png";
import RegisImg from "../../assets/register.png";
import { useSelector, useDispatch } from "react-redux";
import { registerPost, data } from "./reducer";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const register = useSelector(data);
  const registerErr = useSelector((state) => state.register.error);
  const registerSucc = useSelector((state) => state.register.success);

  const handleRegister = () => {
    const payload = { username, email, password };
    dispatch(registerPost(payload))
      .unwrap()
      .then(() => {
        setTimeout(() => {
          Navigate("/login");
        }, 2000);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    setError(registerErr);
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [registerErr]);

  useEffect(() => {
    setSuccess(registerSucc);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }, [registerSucc]);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleRegister();
    }
  };

  console.log(register);

  return (
    <div className="app-container">
      <CardContent
        sx={{
          paddingBottom: "150px",
          fontSize: "20px",
          width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500 },
          justifyContent: "center",
        }}
      >
        <img className="logoo" src={LogoImg} alt=""></img>
        <h1 className="create">Create an account</h1>
        <p>Create an account to access all the features</p>

        <TextField
          sx={{ marginTop: "15px" }}
          label="Username"
          variant="standard"
          width="20px"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyUp={handleKeypress}
        />
        <TextField
          sx={{ marginTop: "15px" }}
          label="Email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleRegister}
        >
          Create Account{" "}
        </Button>
        <div className="signin">
          <span>
            already have an account?{" "}
            <Link to="/login">log in</Link>
          </span>
        </div>
        {success && (
          <Alert sx={{ marginTop: "10px" }} severity="success">
            {success}
          </Alert>
        )}
        {error && (
          <Alert sx={{ marginTop: "10px" }} severity="error">
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
