import React from 'react';
import { useParams } from 'react-router-dom';
import Api from './api';

export default function MealDetails() {
    const [meal, setMeal] = React.useState(null);
    let id = useParams().id;
    React.useEffect(() => Api.getMealById(setMeal, id), [id]);
    console.log(meal);
    if (meal) {
        return (
            <>
                {meal.map((meal) => 
                    <div key={meal.idMeal} className='details-container'>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h2>Ingredients</h2>
                        <ul className='ingredients-tab'>
                            {Object.keys(meal).filter(key => key.startsWith('strIngredient')).map((key, index) => (
                                <li key={key}>
                                    <div className="ingredient">{meal[key]}</div>
                                    <div className="quantity">{meal[`strMeasure${index + 1}`]}</div>
                                </li>
                            ))}
                        </ul>
                        <h2>Instructions</h2>
                        <p>{meal.strInstructions}</p>
                    </div>
                )}
            </>
        )
    }
}