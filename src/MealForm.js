// Meal Planning App!


// This portion of the codee importing the useState hook from the react library, which allows the creation of state variables in functional components

// The MealForm component takes in three props: meal, onSave, and onCancel. Inside the component, three state variables are created using useState, with
// initial values determined by the meal prop, if it exists

// The handleSubmit function is triggered when the form is submitted and it prevents the default form submission behavior using preventDefault(). 
//The function then creates a new meal object using the state variables and calls the onSave prop function with the new meal object as an argument

//Finally, the component renders a form with input fields for title, image, and description, and two buttons to save or cancel the form. 
//The MealForm component is then exported as the default export of the module.

import { useState } from 'react';


function MealForm({ meal, onSave, onCancel }) {
  const [title, setTitle] = useState(meal ? meal.title : '');
  const [image, setImage] = useState(meal ? meal.image : '');
  const [description, setDescription] = useState(
    meal ? meal.description : ''
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMeal = {
      title,
      image,
      description,
    };
    onSave(newMeal);
  };

  return (
    <form className="meal-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default MealForm;
