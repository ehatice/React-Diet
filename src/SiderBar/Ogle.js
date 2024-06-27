import React, { useState } from 'react';
import { message } from 'antd';
import MealCard from '../CardComponent';

const Ogle = ({ caloriesValue }) => {
  const [meals, setMeals] = useState([]);

  return (
    <MealCard
      title="Öğle Yemeği"
      maxCalories={caloriesValue * 0.3}
      meals={meals}
      setMeals={setMeals}
      storageKey="ogleMeals"
    />
  );
};

export default Ogle;