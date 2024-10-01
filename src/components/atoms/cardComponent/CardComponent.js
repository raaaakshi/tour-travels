import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, } from "@mui/material";
import { styled } from "@mui/system";

const CardBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid black",
  borderRadius: "20px",
  padding: "20px",
  width:"280px",
  textAlign: "center",
});

const CardComponent = ({ title, content, subContent, onBtnClick, buttonColor }) => {
  return (
    <CardBox >
      <Typography sx={{marginBottom:"10px"}} variant="h6">{title}</Typography>
      <Typography sx={{fontWeight:1000,marginBottom:"10px",fontSize:"2rem"}} variant="body1">{content}</Typography>
      <Typography sx={{fontSize:"1rem", fontWeight:400}} variant="body2" color="textSecondary">{subContent}</Typography>
      {onBtnClick && (
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{
            marginTop: 2,
            borderRadius:"10px",
            backgroundColor: buttonColor,
            color: "white",
            "&:hover": {
              backgroundColor: buttonColor,
            },
          }}
          onClick={onBtnClick}
        >
          Cancel
        </Button>
      )}
    </CardBox>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  subContent: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func,
  buttonColor: PropTypes.string,
};

export default CardComponent;




