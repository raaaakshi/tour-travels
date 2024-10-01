import React from "react";
import { Box, styled, Typography } from "@mui/material";
import InputFieldComponent from "../../../atoms/inputFieldComponent/InputFieldComponent";
import mountainImg from "../../../../assets/firstpage.png";
import overlayImg from "../../../../assets/mountain.svg";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  const CustomLink = styled(Link)(({ theme }) => ({
    color: "black",
    fontWeight: 1000,
    textDecoration: "none",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
    "&:hover": {
      color: "#3F9FA1",
      textDecoration: "underline",
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        background:
          "linear-gradient(to bottom right, #3F9FA1, #45B0B2, #57DBDE, #7DDFE2, #ABE4E8, #D5E9ED)",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          marginTop: "30px",
          height: "80vh",
          backgroundImage: `url(${mountainImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          zIndex: 3,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          marginTop: "30px",
          left: 0,
          width: "100%",
          height: "80vh",
          backgroundImage: `url(${overlayImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: 440,
          padding: 4,
          height: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 5,
          marginRight: "60px",
          zIndex: 2,
          marginLeft: "auto",
          marginBottom: "70px",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          textAlign="center"
          sx={{ color: "#3F9FA1", fontWeight: 800 }}
        >
          Login
        </Typography>
        <InputFieldComponent
          sx={{ marginTop: "40px", cursor: "pointer" }}
          label="Number / E-mail"
          fullWidth
          size="medium"
        />
        <InputFieldComponent
          sx={{ marginTop: "20px", cursor: "pointer" }}
          label="Password"
          type="password"
          fullWidth
          size="medium"
        />
        <Box
          onClick={handleLogin}
          sx={{
            backgroundColor: "#3F9FA1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            padding: "10px",
            cursor: "pointer",
            marginTop: "30px",
            borderRadius: "5px",
          }}
        >
          Login
        </Box>
        <Typography variant="body2" textAlign="center" sx={{ margin: 2 }}>
          Don't have an Account?{" "}
          <CustomLink to="/register">Register</CustomLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
