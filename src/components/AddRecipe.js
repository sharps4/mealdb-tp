import React from 'react';
import { Link } from 'react-router-dom';

const AddRecipe = ({ addMeal }) => {
  const [name, setName] = React.useState('');
  const [ingredients, setIngredients] = React.useState('');
  const [instructions, setInstructions] = React.useState('');
  const [image, setImage] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const reader = new FileReader();
    reader.onload = (event) => {
      const recipe = {
        id: Date.now(),
        name,
        ingredients,
        instructions,
        image: event.target.result,
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
    reader.readAsDataURL(image);
  };
  
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div>
      <form className='addrecipe' onSubmit={handleSubmit}>
        <label>Nom:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
        <label>Ingredients:</label>
        <textarea value={ingredients} onChange={(event) => setIngredients(event.target.value)}/>
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(event) => setInstructions(event.target.value)}/>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange}/>
        {/* <Link to='/'> */}
          <button type="submit">Ajouter une recette</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default AddRecipe;