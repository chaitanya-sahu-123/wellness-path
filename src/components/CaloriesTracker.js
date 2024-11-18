import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Stack } from '@mui/material';

const CaloriesTracker = () => {
  const [calories, setCalories] = useState(0);
  const [date, setDate] = useState('');
  const [caloriesLog, setCaloriesLog] = useState([]);

  // Load the stored calorie log from localStorage when the component mounts
  useEffect(() => {
    const storedLog = JSON.parse(localStorage.getItem('caloriesLog'));
    if (storedLog) {
      setCaloriesLog(storedLog);
    }
  }, []);

  // Function to add a new calorie entry
  const handleAddCalories = () => {
    const newEntry = { date, calories };
    const updatedLog = [...caloriesLog, newEntry];
    setCaloriesLog(updatedLog);
    localStorage.setItem('caloriesLog', JSON.stringify(updatedLog)); // Save to localStorage
    setDate('');
    setCalories(0);
  };

  // Function to clear all logs
  const handleClearLog = () => {
    setCaloriesLog([]);
    localStorage.removeItem('caloriesLog');
  };

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" mb="20px">
        Track Your Calories
      </Typography>
      <Typography variant="h7" fontWeight="" mb="20px">
        Enter Date (Optional)
      </Typography>

      <Stack spacing={5}>
        {/* Input field for date */}
        <TextField
          label=""
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          required
        />

        {/* Input field for calorie count */}
        <TextField
          label="Calories"
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
          fullWidth
          required
        />

        {/* Add button to add calories entry */}
        <Button variant="contained" color="primary" onClick={handleAddCalories}>
          Add Calories
        </Button>
      </Stack>

      {/* Display log of calorie entries */}
      <Box mt="40px">
        <Typography variant="h6" fontWeight="bold" mb="10px">
          Your Calorie Log:
        </Typography>

        {caloriesLog.length > 0 ? (
          <Stack spacing={2}>
            {caloriesLog.map((entry, index) => (
              <Box key={index} sx={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <Typography>Date: {entry.date}</Typography>
                <Typography>Calories: {entry.calories}</Typography>
              </Box>
            ))}
          </Stack>
        ) : (
          <Typography>No entries found. Please add calories.</Typography>
        )}

        {/* Button to clear log */}
        {caloriesLog.length > 0 && (
          <Button variant="outlined" color="secondary" onClick={handleClearLog} sx={{ mt: '20px' }}>
            Clear Log
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CaloriesTracker;
