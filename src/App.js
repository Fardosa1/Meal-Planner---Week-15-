// Let's talk about my meal planner app! 
// Proivdes a bunch on different meals for people to spice up their kitchen
// Using a mockAPI Sponacualr Api

// This portion of the code defines the api_key which is 
// is used to fetcch request to retreive meals from Spoonacular
// The component renders a MealForm component to allow users to add new meals 


//to the planner. It also maps over the meals array and renders a Meal component 
//for each meal in the planner. The onDelete and onEdit functions are passed down to each Meal component 
//to handle removing and editing meals from the planner..




import { useState, useEffect } from 'react';
import './App.css';
import Meal from './Meal';
import MealForm from './MealForm';

const API_KEY = 'YOUR_API_KEY_HERE';

const DEFAULT_MEALS = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    image: 'https://spoonacular.com/recipeImages/715594-312x231.jpg',
    description:
      'This pasta dish is a favourite with everyone. It is quick and easy to make and tastes fantastic. Try it today and you will not be disappointed!',
  },
  {
    id: 2,
    title: 'Chicken Tikka Masala',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    description:
      'This delicious Indian dish is a must-try for anyone who loves spicy food. The chicken is marinated in a spicy yogurt sauce and then grilled to perfection. It is then served in a creamy tomato sauce. Yum!',
  },
  {
    id: 3,
    title: 'Korean Beef Bibimbap',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    description:
      'This dish is a Korean classic, consisting of rice, vegetables, and marinated beef. It is a perfect balance of flavours and textures.',
  },
  {
    id: 4,
    title: 'Lemon Butter Chicken',
    image: 'https://spoonacular.com/recipeImages/716429-312x231.jpg',
    description:
      'This chicken dish is a crowd pleaser, with its tangy lemon butter sauce and tender chicken. Serve it over rice or pasta for a complete meal.',
  },
];

function App() {
  const [meals, setMeals] = useState(DEFAULT_MEALS);

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`
    )
      .then((response) => response.json())
      .then((data) => {
        const newMeals = data.results.map((meal) => ({
          id: meal.id,
          title: meal.title,
          image: meal.image,
          description: meal.summary,
        }));
        setMeals([...DEFAULT_MEALS, ...newMeals]);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleAddMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  const handleDeleteMeal = (id) => {
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const handleEditMeal = (id, updatedMeal) => {
    setMeals(meals.map((meal) => (meal.id === id ? updatedMeal : meal)));
  };

  return (
    <div className="app">
      <h1>Meal Planner</h1>
      <MealForm onAdd={handleAddMeal} />
      <div className="meals">
        {meals.map((meal) => (
          <Meal
            key={meal.id}
            meal={meal}
            onDelete={handleDeleteMeal}
            onEdit={handleEditMeal}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
