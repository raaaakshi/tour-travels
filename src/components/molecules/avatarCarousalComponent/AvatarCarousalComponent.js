import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Divider } from '@mui/material';
import { styled } from '@mui/system';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import bangaloreImg from '../../../../src/assets/bangalore.png';
import chennaiImg from '../../../../src/assets/chennai.png';
import bangkokImg from '../../../../src/assets/bangkok.png';
import australiaImg from '../../../../src/assets/australia.png';
import italyImg from '../../../../src/assets/italy.png';
import amsterdamImg from '../../../../src/assets/amsterdam.png';

const avatars = [
    { label: 'Bangalore', imgSrc: bangaloreImg },
    { label: 'Chennai', imgSrc: chennaiImg },
    { label: 'Bangkok', imgSrc: bangkokImg },
    { label: 'Australia', imgSrc: australiaImg },
    { label: 'Italy', imgSrc: italyImg },
    { label: 'Amsterdam', imgSrc: amsterdamImg },
];

const AvatarStyled = styled(Avatar)({
    width: 100,
    height: 100,
    margin: "0 20px 0 40px",
    position: 'absolute',
    zIndex: "8"
});

const NextArrow = ({ onClick }) => (
    <div
        style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 10,
        }}
        onClick={onClick}
    >
        <ArrowForwardIosIcon style={{ color: '#3F9FA1', border: "#3F9FA1 1px solid", backgroundColor: "white", borderRadius: '50%' }} />
    </div>
);

const PrevArrow = ({ onClick, isPrevVisible }) => (
    <div
        style={{
            display: isPrevVisible ? 'block' : 'none',
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: 10,
        }}
        onClick={onClick}
    >
        <ArrowBackIosIcon style={{ color: '#3F9FA1', border: "#3F9FA1 1px solid", backgroundColor: "white", borderRadius: '50%' }} />
    </div>
);

export default function AvatarCarouselComponent() {
    const [isPrevVisible, setIsPrevVisible] = useState(false);

    const handleNextClick = (onClick) => {
        setIsPrevVisible(true);
        onClick();
    };

    const handlePrevClick = (onClick) => {
        onClick();
    };

    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <NextArrow onClick={(onClick) => handleNextClick(onClick)} />,
        prevArrow: <PrevArrow onClick={(onClick) => handlePrevClick(onClick)} isPrevVisible={isPrevVisible} />,
        afterChange: (index) => {
            if (index === 0) {
                setIsPrevVisible(true);
            } else {
                setIsPrevVisible(false);
            }
        }
    };

    return (
        <Box sx={{ textAlign: 'start', padding: 3 }}>
            <Typography variant="h5" component="h1" gutterBottom sx={{fontWeight:600}}>
                Choose Location
            </Typography>
            <Slider {...settings}>
                {avatars.map((avatar, index) => (
                    <div key={index}>
                        <Box textAlign="center">
                            <AvatarStyled src={avatar.imgSrc} alt={avatar.label} />
                            <Button sx={{ backgroundColor: "#3F9FA1", color: "white", zIndex: 10, position: "relative", marginTop: "80px",'&:hover': {
            backgroundColor: "#3F9FA1", 
            color: "white" 
        } }}>{avatar.label}</Button>
                        </Box>
                    </div>
                ))}
            </Slider>

            <Divider  flexItem sx={{ margin: "30px 0px" ,border:"1px solid #bdbdbd"}} />

            <Typography variant="h5" component="h1" gutterBottom sx={{fontWeight:600}}>
                Choose Location
            </Typography>

        </Box>
    );
}



