import React, { useState, useEffect } from 'react';
import { Card, List, Button, Input, message, Layout } from 'antd';

const { Content } = Layout;

const MealCard = ({ title, maxCalories, meals, setMeals, storageKey }) => {
  const [newMealName, setNewMealName] = useState('');
  const [newMealCalories, setNewMealCalories] = useState('');

  useEffect(() => {
    const storedMeals = localStorage.getItem(storageKey);
    console.log(`Trying to load meals from localStorage (${storageKey}):`, storedMeals);
    if (storedMeals) {
      try {
        const parsedMeals = JSON.parse(storedMeals);
        console.log(`Parsed meals from localStorage (${storageKey}):`, parsedMeals);
        if (Array.isArray(parsedMeals)) {
          setMeals(parsedMeals);
        }
      } catch (error) {
        console.error(`Error parsing meals from localStorage (${storageKey}):`, error);
      }
    }
  }, [storageKey, setMeals]);

  useEffect(() => {
    if (meals.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(meals));
      console.log(`Saved meals to localStorage (${storageKey}):`, meals);
    }
  }, [meals, storageKey]);

  const handleAddMeal = () => {
    const name = newMealName.trim();
    const calories = parseInt(newMealCalories);

    if (!name || !calories || isNaN(calories)) {
      message.error('Lütfen geçerli bir yemek adı ve kalori değeri girin.');
      return;
    }

    const totalCalories = meals.reduce((acc, curr) => acc + curr.calories, 0);

    if (totalCalories + calories > maxCalories) {
      message.error(`Toplam kalori limitinizi aştınız (${maxCalories} Kalori).`);
      return;
    }

    setMeals([...meals, { name, calories }]);
    setNewMealName('');
    setNewMealCalories('');
  };

  const remainingCalories = maxCalories - meals.reduce((acc, curr) => acc + curr.calories, 0);

  return (
    <div>
    <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Content>
        <Card
          title={title}
          style={{ width: 400, marginTop: 16, textAlign: 'center' }}
          extra={<Button onClick={() => setMeals([])}>Temizle</Button>}
        >
          <Input
            placeholder="Yemek adı girin"
            value={newMealName}
            onChange={(e) => setNewMealName(e.target.value)}
            style={{ marginBottom: 8 }}
          />
          <Input
            placeholder="Kalori girin"
            value={newMealCalories}
            onChange={(e) => setNewMealCalories(e.target.value)}
            style={{ marginBottom: 8 }}
            type="number"
          />
          <Button type="primary" onClick={handleAddMeal} style={{ marginBottom: 8 }}>
            Ekle
          </Button>
          <List
            size="small"
            dataSource={meals}
            renderItem={(item) => (
              <List.Item>
                {item.name} - {item.calories} Kalori
              </List.Item>
            )}
          />
          <p>Kalan Kalori: {remainingCalories}</p>
        </Card>
      </Content>
    </Layout>
    </div>
  );
};

export default MealCard;
