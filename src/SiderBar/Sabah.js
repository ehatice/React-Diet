import React, { useState } from 'react';
import MealCard from '../CardComponent';

const Sabah = ({ caloriesValue }) => {
  const [meals, setMeals] = useState([]);

  return (
    <MealCard
      title="Sabah Kahvaltısı"
      maxCalories={caloriesValue * 0.4}
      meals={meals}
      setMeals={setMeals}
      storageKey="sabahMeals"
    />
  );
};

export default Sabah;
