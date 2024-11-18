import React from 'react';
import { Box, Typography, Avatar, Stack, Button } from '@mui/material';
import ProfilePhoto from '../assets/images/profile.jpg'; 

const ProfilePage = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Avatar
        alt="Profile Photo"
        src={ProfilePhoto}
        sx={{
          width: 150,
          height: 150,
          margin: '20px auto',
          border: '4px solid #FF2625',
        }}
      />
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Virat Kohli
      </Typography>
      <Typography variant="h6" mb={4}>
        Health Enthusiast | Fitness Tracker
      </Typography>

      <Stack spacing={2} direction="column" alignItems="center">
        <Typography variant="body1">
          <b>Email:</b> virat.kohli@gmail.com
        </Typography>
        <Typography variant="body1">
          <b>Age:</b> 32
        </Typography>
        <Typography variant="body1">
          <b>Height:</b> 5'8" (173 cm)
        </Typography>
        <Typography variant="body1">
          <b>Weight:</b> 70 kg
        </Typography>
      </Stack>

      <Button
        href="/"
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: '#FF2625',
          color: 'white',
          '&:hover': { backgroundColor: '#ff5951' },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default ProfilePage;
