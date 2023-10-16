import React from 'react'
import MealDetails from '../components/MealDetails'
import Header from '../components/Header'

function Details() {
  return (
    <>
      <Header></Header>
      <main>
        <h1>Details</h1>
        <div>
          <MealDetails></MealDetails>
        </div>
      </main>
    </>
  )
}

export default Details