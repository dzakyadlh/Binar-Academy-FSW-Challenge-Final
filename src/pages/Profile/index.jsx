import {
  TextField,
  Button,
  CardContent,
  Alert,
  makeStyles,
} from "@mui/material";
import { useState, useEffect, Redirect } from "react";
import { useNavigate } from "react-router";
import LogoImg from "../../assets/LOGO1.png";
import ProfileImg from "../../assets/profile1.png";
import axios from "axios";
import * as React from "react";
import "./profile.css";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile, deleteProfile, data } from "./reducer";

const Profile = () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const [NewUsername, setNewUsername] = useState(`${username}`);
  const [NewEmail, setNewEmail] = useState(`${email}`);
  const [NewPassword, setNewPassword] = useState("");
  const [OldPassword, setOldPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector(data);
  const profileErr = useSelector((state) => state.profile.error);
  const profileSucc = useSelector((state) => state.profile.success);

  const token = localStorage.getItem("token");

  const handleUpdateProfile = () => {
    const payload = { NewUsername, NewEmail, OldPassword, NewPassword };
    dispatch(updateProfile(payload))
      .unwrap()
      .then((res) => {
        localStorage.setItem("username", NewUsername);
        localStorage.setItem("email", NewEmail);
        setEditMode(false);
        // setSuccess(profileSucc);

        // setTimeout(() => {
        //   setSuccess("");
        // }, 2000);
      })
      .catch((err) => {
        //   // setError(profileErr);
        //   setError(profileErr);
        //   setTimeout(() => {
        //     setError("");
        //   }, 2000);
      });
  };

  useEffect(() => {
    setError(profileErr);
    setTimeout(() => {
      setError("");
    }, 3000);
  }, [profileErr]);

  useEffect(() => {
    setSuccess(profileSucc);
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  }, [profileSucc]);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleDeleteProfile = () => {
    dispatch(deleteProfile())
      .unwrap()
      .then((res) => {
        localStorage.clear();
        // setSuccess(profileSucc);

        // setTimeout(() => {
        //   setSuccess("");
        // }, 2000);
        setTimeout(() => {
          Navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        //   // setError(profileErr);
        //   setError(profileErr);
        //   setTimeout(() => {
        //     setError("");
        //   }, 2000);
      });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="container-profile">
          <div className="container-35">
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
              <h1>Profile</h1>

              <TextField
                style={{ marginTop: "15px" }}
                variant="standard"
                fullWidth
                value={NewUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                disabled={!editMode}
              />
              <TextField
                style={{ marginTop: "15px" }}
                variant="standard"
                fullWidth
                value={NewEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                disabled={!editMode}
              />
              {editMode ? (
                <div>
                  <TextField
                    style={{ marginTop: "15px" }}
                    label="OldPassword"
                    type="password"
                    variant="standard"
                    fullWidth
                    value={OldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    disabled={!editMode}
                  />
                  <TextField
                    style={{ marginTop: "15px" }}
                    label="NewPassword"
                    type="password"
                    variant="standard"
                    fullWidth
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    disabled={!editMode}
                  />
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: "15px",
                      marginTop: "30px",
                      width: "400px",
                    }}
                    onClick={handleUpdateProfile}
                  >
                    Edit Profile
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      backgroundColor: "#FF6584",
                      borderRadius: "15px",
                      marginTop: "30px",
                      width: "400px",
                    }}
                    onClick={handleDeleteProfile}
                  >
                    Delete Account
                  </Button>
                </div>
              ) : (
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "15px",
                    marginTop: "30px",
                    width: "400px",
                  }}
                  onClick={handleEditProfile}
                >
                  Update Profile
                </Button>
              )}
              {success && (
                <Alert style={{ marginTop: "10px" }} severity="success">
                  {success}
                </Alert>
              )}
              {error && (
                <Alert style={{ marginTop: "10px" }} severity="error">
                  {error}
                </Alert>
              )}
            </CardContent>
          </div>
          <div className="container-40">
            <img className="profileimg" src={ProfileImg} alt="profile" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
