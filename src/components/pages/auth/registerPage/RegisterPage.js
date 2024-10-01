import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import InputFieldComponent from '../../../atoms/inputFieldComponent/InputFieldComponent';
import mountainImg from '../../../../assets/firstpage.png';
import overlayImg from '../../../../assets/mountain.svg';
import { Link, useNavigate } from 'react-router-dom';



const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
    
        navigate('/login');
    };

    const CustomLink = styled(Link)(({ theme }) => ({
        color: 'black',
        fontWeight:1000,
        textDecoration: 'none',
        transition: 'color 0.3s ease, text-decoration 0.3s ease',
        '&:hover': {
            color: "#3F9FA1",
            textDecoration: 'underline',
        },
    }));

    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                background: 'linear-gradient(to bottom right, #3F9FA1, #45B0B2, #57DBDE, #7DDFE2, #ABE4E8, #D5E9ED)',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '60%',
                    marginTop: '30px',
                    height: '80vh',
                    backgroundImage: `url(${mountainImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.9,
                    zIndex: 3,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    marginTop: '30px',
                    left: 0,
                    width: '100%',
                    height: '80vh',
                    backgroundImage: `url(${overlayImg})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    width: 440,
                    padding: 4,
                    height: 'auto',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    marginRight: '60px',
                    zIndex: 2,
                    margin: '60px 60px 70px auto',
                    boxSizing: 'border-box',
                    borderRadius:"20px"
                }}
            >
                <Typography variant="h5" gutterBottom textAlign="center" sx={{color:"#3F9FA1",fontWeight:800}} >
                    Register
                </Typography>

                <InputFieldComponent label="Name" fullWidth margin="normal" size="small" />

                <InputFieldComponent label="E-mail" fullWidth margin="normal" size="small" />
                <InputFieldComponent label="Mobile" type="number" fullWidth margin="normal" size="small" />
                <InputFieldComponent label="Address" type="text" fullWidth margin="normal" size="small" />
                <InputFieldComponent label="Password" type="password" fullWidth margin="normal" size="small" />

                <Box onClick={handleRegister} sx={{backgroundColor:"#3F9FA1",display:"flex",alignItems:"center",borderRadius:"5px",
                    justifyContent:"center", color:"white",padding:"10px",cursor: 'pointer', marginTop:"20px"}} >
                Register
                </Box>
            
                <Typography variant="body2" textAlign="center" sx={{ marginTop: 2 }}>
                Already have an Account? <CustomLink to="/login">Login</CustomLink>
        </Typography>
            </Box>
        </Box>
    );
}

export default RegisterPage;




