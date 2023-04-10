// Meal Planning App To Provide Varaties 

// This portion of the code exports a functional component "meal" that 
// receives props, meal, onDelete and onEdit
// Using the useState hook to defind a booolean statee
// isediting that is set to false at fitst. 


// The component renders either a MealForm component or a div with meal
// information depending on the value of isEditing. If isEditing is true, MealForm is rendered to allow the user to edit the meal. 

// Otherwise, the meal's image, title, and description are rendered along with two buttons to edit or delete the meal.
// When the delete button is clicked, onDelete function is called with the meal object's id. When the edit button is clicked, t
//he isEditing state is set to true. If the MealForm component's onSave prop is called with an updated meal object, onEdit function is called 
//with the meal object's id and the updated meal object, and isEditing is set to false.
import { useState } from 'react';
import MealForm from './MealForm';
import './Meal';

function Meal({ meal, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteClick = () => {
    onDelete(meal.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = (updatedMeal) => {
    onEdit(meal.id, updatedMeal);
    setIsEditing(false);
  };

  return (
    <div className="meal">
      {isEditing ? (
        <MealForm
          meal={meal}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
        />
      ) : (
        <>
          <img src={meal.image} alt={meal.title} />
          <h2>{meal.title}</h2>
          <p>{meal.description}</p>
          <div className="buttons">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Meal;
