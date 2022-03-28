import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import MealList from "./MealList";
var axios = require("axios").default;

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function handleChange(e) {
    setCalories(e.target.value);

  }

  function getMealData() {
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
      params: {
        exclude: 'shellfish, olives',
        diet: 'vegetarian',
        targetCalories: '2000',
        timeFrame: 'day'
      },
      headers: {
        'X-RapidAPI-Host': '',
        'X-RapidAPI-Key': ''
      }
    };
    
    axios.request(options).then(function (response) {
      setMealData(response.data);
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }

  return (
    <div className="App">
      <section className="controls">
        <input 
        type="number"
        placeholder="Calories (e.g. 2000)"
        onChange={handleChange}
        />
      </section>
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

export default App;
