import React, { useState, useEffect } from "react";
import axios from "axios";

//This needs to be populated with the recipes from the current meal plan 
const data = [
  { id: 1, name: "Recipe 1" },
  { id: 2, name: "Recipe 2" },
  { id: 3, name: "Recipe 3" },
  { id: 4, name: "Recipe super cool" },
  { id: 5, name: "Recipe very good" }
];

export default function History() {
  const [meals, setMeals] = useState([]);

  function favoriteMeal(event) {
    let id = event.target.parentElement.id;
    console.log(id);
    let temp = [...meals];
    let meal = null;
    for (let i in temp) {
      if (temp[i].recipe_id == id) {
        temp[i].fav = true;
        meal = temp[i];
      }
    }
    console.log("Favorited Meal: ", temp);
    setMeals(temp);
    if (meal) {
      axios.post("http://localhost:8081/api/favourites", {meal_id: meal.id, meal_title: meal.title, meal_sourceurl: meal.sourceurl});
    }
  }

  useEffect(() => {
    console.log("Meals Changed: ", meals);
  }, [meals])

  useEffect(() => {
    axios.get("http://localhost:8081/api/history").then(res => {
      let meal = res.data;
      meal.forEach(m => {
        m.fav = false;
      });
      console.log("Meals loaded:", meal);
      setMeals(meal);
    })
  }, []);

  return (
    <div className="App">
      <h1><u>Recipe History</u></h1><br/><br/>
      <ul>
        {meals.map(item =>
          <li key={item.recipe_id} id={item.recipe_id}>
            <h3>{item.title}</h3>
            <a href={item.sourceurl}>{item.sourceurl}</a>
            {item.fav == true ? 
            <p>Favourited!</p>
           :
           <button onClick={favoriteMeal}>Favourite</button>}
          </li>
        )}
      </ul>
    </div>
  );
}
