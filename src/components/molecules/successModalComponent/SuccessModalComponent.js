import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Modal, Button } from '@mui/material';
import { styled } from '@mui/system';
import PaymentGif from '../../../../src/assets/payment_successful.gif'; 

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const SuccessContent = styled(Box)({
    width: 400,
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: 24,
    padding: 20,
    textAlign: 'center',
});

const SuccessModalComponent = ({ open, onClose }) => {
    return (
        <StyledModal open={true} onClose={onClose}>
            <SuccessContent>
                <img src={PaymentGif} alt="Payment Successful" style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Payment Successful
                </Typography>
                <Button variant="contained" onClick={onClose} sx={{ backgroundColor: '#3F9FA1', color: 'white' }}>
                    OK
                </Button>
            </SuccessContent>
        </StyledModal>
    );
};

SuccessModalComponent.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default SuccessModalComponent;





