import React, { useState } from 'react';
import { message } from 'antd';
import MealCard from '../CardComponent';

const Aksam = ({ caloriesValue }) => {
  const [meals, setMeals] = useState([]);

  return (
    <MealCard
      title="Akşam Yemeği"
      maxCalories={caloriesValue * 0.3}
      meals={meals}
      setMeals={setMeals}
      storageKey="aksamMeals"
    />
  );
};

export default Aksam;