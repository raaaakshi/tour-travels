import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/auth/loginPage/LoginPage';
import RegisterPage from './components/pages/auth/registerPage/RegisterPage';
import HomePage from './components/pages/homePage/HomePage';
import BookingPage from './components/pages/bookingPage/BookingPage';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3F9FA1',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/bookings" element={<BookingPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
