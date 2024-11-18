import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack, Avatar } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import ProfilePhoto from '../assets/images/profile.jpg';

const Navbar = () => {
  const location = useLocation(); // Get the current location

  // Function to check if the current path matches the given route
  const isActive = (path) => location.pathname === path;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        px: '20px',
        my: '10px',
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '48px',
            height: '48px',
            margin: '0px 20px',
          }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: isActive('/') ? '3px solid #FF2625' : 'none',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: location.hash === '#exercises' ? '3px solid #FF2625' : 'none',
          }}
        >
          Exercises
        </a>
        <Link
          to="/calories"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: isActive('/calories') ? '3px solid #FF2625' : 'none',
          }}
        >
          Calories Tracker
        </Link>
        <Link
          to="/food-info"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: isActive('/food-info') ? '3px solid #FF2625' : 'none',
          }}
        >
          Food Information
        </Link>
        <Link
          to="/bmi-calculator"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: isActive('/bmi-calculator') ? '3px solid #FF2625' : 'none',
          }}
        >
          BMI Calculator
        </Link>
      </Stack>

      {/* Profile Photo */}
      <Link to="/profile">
        <Avatar
          alt="Profile Photo"
          src={ProfilePhoto}
          sx={{
            width: 48,
            height: 48,
            cursor: 'pointer',
            border: '2px solid #FF2625',
          }}
        />
      </Link>
    </Stack>
  );
};

export default Navbar;
