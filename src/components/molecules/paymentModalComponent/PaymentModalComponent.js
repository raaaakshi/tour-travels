import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Button,
  Modal,
} from "@mui/material";
import { styled } from "@mui/system";
import CancelIcon from "@mui/icons-material/Cancel";
import GooglePayIcon from "@mui/icons-material/Payment";
import PhonePayIcon from "@mui/icons-material/PhoneAndroid";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";


const ModalContent = styled(Paper)({
  position: "absolute",
  width: 600,
  backgroundColor: "white",
  borderRadius:"20px",
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

const PaymentModalComponent = ({ open, onClose,onBtnClick=()=>{} }) => {
  

  return (
    <>
      
        <Modal open={true} onClose={onClose} sx={{display:"flex",alignItems:"center",justifyContent:"center"} }>
          <ModalContent>
            <Navbar>
              <Typography variant="h6">Payment</Typography>
              <IconButton
                onClick={onClose}
                aria-label="close"
                sx={{
                  "&:hover": {
                    color: "#0B8587",
                  },
                }}
              >
                <CancelIcon />
              </IconButton>
            </Navbar>
            <Typography variant="subtitle1" style={{ color: "#0B8587" }}>
              UPI Payments
            </Typography>

            {/* Google Pay Section */}
            <Box
              display="flex"
              alignItems="center"
              width="85%"
              borderRadius={1}
              margin={"5px 20px 20px 40px"}
              border="1px solid black"
              transition="border-color 0.3s"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid blue",
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <GooglePayIcon sx={{ color: "#4caf50" }} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  G Pay
                </Typography>
              </Box>
              <IconButton style={{ marginLeft: "370px" }}>
                <AddTaskRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>

            {/* PhonePe Section */}
            <Box
              display="flex"
              alignItems="center"
              width="85%"
              borderRadius={1}
              margin={"5px 20px 20px 40px"}
              border="1px solid black"
              transition="border-color 0.3s"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  border: "2px solid purple",
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <PhonePayIcon sx={{ color: "#002984" }} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  PhonePe
                </Typography>
              </Box>
              <IconButton style={{ marginLeft: "350px" }}>
                <AddTaskRoundedIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>

            {/* Add other UPI */}
            <Typography variant="body2" style={{ color: "#0B8587" }}>
              Add Other UPI
            </Typography>

            <Box  sx={{ width: "90%", margin: "20px 20px 20px 30px" }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  width: "100%",
                  color: "#3F9FA1",
                  borderColor: "#3F9FA1",
                }}
              >
                + New UPI
              </Button>
            </Box>

            {/* Submit Button */}
            <Box mt={2} sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3F9FA1", color: "white" , marginBottom:"20px"}}
                onClick={onBtnClick}
              >
                Submit
              </Button>
            </Box>
          </ModalContent>
        </Modal>
      
      
    </>
  );
};

PaymentModalComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PaymentModalComponent;
