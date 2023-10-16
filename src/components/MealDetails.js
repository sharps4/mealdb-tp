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
            <ul>
                {meal.map((meal) => 
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal}/>
                        <h2>{meal.strMeal}</h2>
                        <p>{meal.strInstructions}</p>
                    </li>
                )}
            </ul>
        )
    }
}