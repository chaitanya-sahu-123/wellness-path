import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setMessage('Underweight');
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setMessage('Normal weight');
    else if (bmiValue >= 25 && bmiValue < 29.9) setMessage('Overweight');
    else setMessage('Obese');
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: '20px' }}>
        BMI Calculator
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Height (cm)"
          variant="outlined"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          fullWidth
        />
        <TextField
          label="Weight (kg)"
          variant="outlined"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={calculateBMI}
          sx={{ backgroundColor: '#FF2625', color: '#fff' }}
        >
          Calculate
        </Button>
        {bmi && (
          <Typography variant="h6">
            Your BMI: {bmi} ({message})
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default BmiCalculator;
