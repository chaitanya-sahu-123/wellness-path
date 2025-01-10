import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import banner from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{mt:{lg:'80px',xs:'70px'},ml:{sm:'50px'}}} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">    
            Health and Fitness Tracking Platform
        </Typography>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
            Track Your Life, Your Way<br/>with <span style={{color:'#FF2526'}}>Wellness Path</span>
        </Typography>
        <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
            The Most Effective Health and Fitness Tracking Platform available on the planet.
        </Typography>
        <Stack>
          
        <a
      href="#exercises"
      onClick={(e) => {
        e.preventDefault(); 
        const target = document.getElementById('exercises'); 
        target.scrollIntoView({ behavior: 'smooth' });  
      }}
      style={{
        marginTop: '45px',
        textDecoration: 'none',
        width: '200px',
        textAlign: 'center',
        background: '#FF2625',
        padding: '14px',
        fontSize: '22px',
        textTransform: 'none',
        color: 'white',
        borderRadius: '4px',
      }}
    >
      Explore Exercises
    </a>
        </Stack>
        <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={banner} alt="hero-banner" className="hero-banner-img" style={{ 
          maxWidth: '100%', 
          height: '80vh', 
          objectFit: 'cover', 
          marginTop: '20px' 
        }} />

    </Box>
);

export default HeroBanner;
