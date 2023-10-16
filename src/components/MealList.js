import React from 'react';
import { Link } from 'react-router-dom';
import MealCard from './MealCard';

const MealList = ({ meals }) => {
  const [favorites, setFavorites] = React.useState([]);
  const [localRecipes, setLocalRecipes] = React.useState([]);

  const handleAddFavorite = (meal) => {
    let email = null;
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      email = JSON.parse(localStorage.getItem('user')).email;
    }

    const storedFavorites = localStorage.getItem(`favorites-${email}`);
    let newFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

    const index = newFavorites.findIndex((fav) => fav.idMeal === meal.idMeal);
    if (index === -1) {
      newFavorites = [...newFavorites, meal];
    } else {
      newFavorites = newFavorites.filter((fav) => fav.idMeal !== meal.idMeal);
    }

    setFavorites(newFavorites);
    if (isLoggedIn) {
      localStorage.setItem(`favorites-${email}`, JSON.stringify(newFavorites));
    }

    console.log('email:', email);
    console.log('newFavorites:', newFavorites);
  };

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  React.useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setLocalRecipes(recipes);
  }, []);

  if (meals && meals.length > 0) {
    const list = meals.map((meal) => (
      <div key={meal.idMeal}>
        <Link to={`/details/${meal.idMeal}`} className='meal-name'>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <h2>{meal.strMeal}</h2>
        </Link>
        {isLoggedIn && (
          <div>
            <button className='favorite-btn' onClick={() => handleAddFavorite(meal)}>
              {favorites.findIndex((fav) => fav.idMeal === meal.idMeal) !== -1 ? '★' : '☆'}
            </button>
          </div>
        )}
        <MealCard infos={meal} />
      </div>
    ));

    const localList = localRecipes.map((recipe) => (
      <div key={recipe.id}>
        <Link to={`/details/${recipe.id}`} className='meal-name'>
          <img className='meal-img' src={recipe.image} alt={recipe.name} />
          <h2>{recipe.name}</h2>
        </Link>
        {isLoggedIn && (
          <div>
            <button className='favorite-btn' onClick={() => handleAddFavorite(recipe)}>
              {favorites.findIndex((fav) => fav.id === recipe.id) !== -1 ? '★' : '☆'}
            </button>
          </div>
        )}
        <MealCard infos={recipe} />
      </div>
    ));

    return (
      <div className='infos'>
        {list}
        {localList}
      </div>
    );
  } else {
    return <p>Aucun résultat trouvé.</p>;
  }
};

export default MealList;