import React from 'react';
import { Box, Typography, Stack, Card, CardContent, Grid } from '@mui/material';

const foodData = [
  {
    name: 'Apple',
    calories: 95,
    fats: 0.3,
    protein: 0.5,
    carbs: 25,
  },
  {
    name: 'Banana',
    calories: 105,
    fats: 0.3,
    protein: 1.3,
    carbs: 27,
  },
  {
    name: 'Rice (1 cup)',
    calories: 200,
    fats: 0.4,
    protein: 4.2,
    carbs: 44,
  },
  {
    name: 'Broccoli',
    calories: 55,
    fats: 0.6,
    protein: 3.7,
    carbs: 11,
  },
  {
    name: 'Carrot',
    calories: 41,
    fats: 0.2,
    protein: 0.9,
    carbs: 10,
  },
  {
    name: 'Cucumber',
    calories: 16,
    fats: 0.1,
    protein: 0.7,
    carbs: 3.6,
  },
  {
    name: 'Spinach',
    calories: 23,
    fats: 0.4,
    protein: 2.9,
    carbs: 3.6,
  },
  {
    name: 'Sweet Potato',
    calories: 103,
    fats: 0.2,
    protein: 2.3,
    carbs: 24,
  },
  {
    name: 'Tomato',
    calories: 18,
    fats: 0.2,
    protein: 0.9,
    carbs: 3.9,
  },
  {
    name: 'Potato',
    calories: 77,
    fats: 0.1,
    protein: 2,
    carbs: 17,
  },
  {
    name: 'Lentils',
    calories: 230,
    fats: 0.9,
    protein: 18,
    carbs: 40,
  },
  {
    name: 'Chickpeas',
    calories: 164,
    fats: 2.6,
    protein: 8.9,
    carbs: 27.4,
  },
  {
    name: 'Cauliflower',
    calories: 25,
    fats: 0.3,
    protein: 1.9,
    carbs: 5,
  },
  {
    name: 'Cabbage',
    calories: 25,
    fats: 0.1,
    protein: 1.3,
    carbs: 5.8,
  },
  {
    name: 'Zucchini',
    calories: 17,
    fats: 0.3,
    protein: 1.2,
    carbs: 3.1,
  },
  {
    name: 'Green Beans',
    calories: 31,
    fats: 0.1,
    protein: 2.4,
    carbs: 7,
  },
  {
    name: 'Mushrooms',
    calories: 22,
    fats: 0.3,
    protein: 3.1,
    carbs: 3.3,
  },
  {
    name: 'Avocado',
    calories: 160,
    fats: 14.7,
    protein: 2,
    carbs: 8.5,
  },
  {
    name: 'Quinoa (1 cup)',
    calories: 222,
    fats: 3.6,
    protein: 8.1,
    carbs: 39.4,
  },
  {
    name: 'Peas',
    calories: 62,
    fats: 0.4,
    protein: 4.1,
    carbs: 11.2,
  },
  {
    name: 'Eggplant',
    calories: 25,
    fats: 0.2,
    protein: 1,
    carbs: 6,
  },
  {
    name: 'Pineapple',
    calories: 50,
    fats: 0.1,
    protein: 0.5,
    carbs: 13,
  },
  {
    name: 'Grapes',
    calories: 69,
    fats: 0.2,
    protein: 0.7,
    carbs: 18,
  },
  {
    name: 'Strawberries',
    calories: 32,
    fats: 0.3,
    protein: 0.7,
    carbs: 7.7,
  },
];

const FoodInfo = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: '30px' }}>
        Food Information
      </Typography>

      <Grid container spacing={3}>
        {foodData.map((food, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'all 0.3s ease',  // Smooth transition
                '&:hover': {
                  transform: 'scale(1.05)',   // Bulge effect
                  backgroundColor: '#f1f1f1',  // Slight color change on hover
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{food.name}</Typography>
                <Stack direction="column" spacing={1}>
                  <Typography>Calories: {food.calories} kcal</Typography>
                  <Typography>Fats: {food.fats} g</Typography>
                  <Typography>Proteins: {food.protein} g</Typography>
                  <Typography>Carbs: {food.carbs} g</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FoodInfo;
