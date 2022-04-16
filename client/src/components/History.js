import React, { useState, useEffect } from "react";
import MealList from "./MealList";

//This needs to be populated with the recipes from the current meal plan 
const data = [
  { id: 1, name: "Recipe 1" },
  { id: 2, name: "Recipe 2" },
  { id: 3, name: "Recipe 3" },
  { id: 4, name: "Recipe super cool" },
  { id: 5, name: "Recipe very good" }
];

export default function History({ mealData }) {


return (
  <div className="App">
    <h1>Your Recipe History</h1>
    <ul>
       <section className="meals">
       {mealData && <MealList mealData={mealData}/>}
      </section>
    </ul>
    </div>)
};
