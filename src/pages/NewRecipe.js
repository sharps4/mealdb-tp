import React from 'react'
import AddRecipe from '../components/AddRecipe'
import Header from '../components/Header'

function NewRecipe() {
    const addMeal = (meal) => {
        const meals = JSON.parse(localStorage.getItem('meals')) || [];
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals));
    };
    return (
        <main>
            <Header></Header>
            <AddRecipe addMeal={addMeal}/>
        </main>
    )
}

export default NewRecipe;