import React, {useState} from "react";
import MealList from "./MealList";
var axios = require("axios").default;

function Main () {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);



  function getMealData() {
    
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
      params: {
        exclude: 'shellfish, olives',
        diet: 'vegetarian', 
        targetCalories: `${calories}`,
        timeFrame: 'day'
      },
      headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_SECRET_KEY}`
      }
    };
    
    axios.request(options).then(function (response) {
      setMealData(response.data);
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }

  function handleChange(e) {
    setCalories(e.target.value);                             
  }

  return (
    <div className="Main">
      <section className="controls">
        <input 
        type="number"
        placeholder="Calories (e.g. 2000)"
        onChange={handleChange}
        />
        <button onClick={getMealData}>Generate a Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

export default Main;