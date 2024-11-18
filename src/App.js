import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CaloriesTracker from './components/CaloriesTracker';
import FoodInfo from './components/FoodInfo';
import BmiCalculator from './components/bmicalculator';
import Profile from './components/Profile';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/calories" element={<CaloriesTracker />} />
      <Route path="/food-info" element={<FoodInfo />} />
      <Route path="/bmi-calculator" element={<BmiCalculator />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
