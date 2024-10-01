import React from 'react';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';

function ButtonComponent({ text = "string", size = "small", onClick = () => {} }) {
  return (
    <Box>
      <Button
        variant="contained"
        size={size}
        sx={{ backgroundColor: "#3F9FA1", color: "white" }}
        onClick={onClick}
      >
        {text}
      </Button>
    </Box>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonComponent;








