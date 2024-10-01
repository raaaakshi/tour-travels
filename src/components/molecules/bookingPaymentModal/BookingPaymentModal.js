import React from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography, Button, Paper, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";

const ModalContent = styled(Paper)({
  position: "absolute",
  width: 450,
  backgroundColor: "white",
  borderRadius: "20px",
  boxShadow: 24,
  padding: 10,
  outline: "none",
  "&:focus": {
    outline: "none",
  },
});

const Navbar = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 10,
  borderBottom: "1px solid #ccc",
  paddingBottom: 10,
});

const BookingPaymentModal = ({ open, onClose, onContinue }) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ModalContent>
        <Navbar>
          <Typography variant="h6">Payment Policy</Typography>
          <IconButton onClick={onClose} aria-label="close" sx={{ "&:hover": { color: "#0B8587" } }}>
            <CancelIcon />
          </IconButton>
        </Navbar>
        <Typography variant="body2" sx={{ margin: 2, textAlign: "left" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box mt={2} sx={{ textAlign: "center" }}>
          <Button variant="contained" sx={{ backgroundColor: "#3F9FA1", color: "white", marginBottom: "20px" }} onClick={onContinue}>
            OK
          </Button>
        </Box>
      </ModalContent>
    </Modal>
  );
};

BookingPaymentModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired,
};

export default BookingPaymentModal;




