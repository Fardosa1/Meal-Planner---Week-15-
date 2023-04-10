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
