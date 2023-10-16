import React from 'react';
import { Link } from 'react-router-dom';

const AddRecipe = ({ addMeal }) => {
  const [name, setName] = React.useState('');
  const [ingredients, setIngredients] = React.useState('');
  const [instructions, setInstructions] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipe = {
      id: Date.now(),
      name,
      ingredients,
      instructions,
      image,
    };

    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(recipes));

    addMeal(recipe);
    setName('');
    setIngredients('');
    setInstructions('');
    setImage(null);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <form className='addrecipe' onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Ingredients:
          <textarea value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        </label>
        <label>
          Instructions:
          <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)} />
        </label>
        <label>
          Image:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <Link to='/'>
          <button type="submit">Ajouter une recette</button>
        </Link>
      </form>
    </div>
  );
};

export default AddRecipe;