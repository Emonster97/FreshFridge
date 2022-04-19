import React, {useState, useEffect, useContext} from "react";
import { authContext } from '../providers/AuthProvider';
import MealList from "./MealList";
var axios = require("axios").default;

function Main () {
//add thing where if no auth we get the login page so that the render error stop

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const { user, setUser, auth } = useContext(authContext);
 /* setUser({ weight:180, 
    height:73,
    age:35,
    exercise:1.2,
    goal:0,
    diet:"vegetarian"});
  */

  //Check for when user.diet updates
  useEffect(() => {
    console.log(user.diet);
  }, [user.diet]);

  //Check for when user.goal updates
  useEffect(() => {
    console.log(user.goal);
    userCalories();
  }, [user.goal]);

  //Check for when calories updates
  useEffect(() => {
    console.log(calories);
  }, [calories]);

  //Diet plan
  function dietPlan(value) {
    setUser(user => {
      return {
        ...user,
        diet: value
      }
    });
  }

  //Weight plan
  function weightPlan(value) {
    setUser(user => {
      return {
        ...user,
        goal: parseInt(value)
      }
    });
  }

  function userCalories() {
    let bmr =  66 + (6.3 * user.weight) + (12.9 * user.height) - (6.8 * user.age);
    setCalories((bmr*user.exercise)+user.goal);
  }
  
 
  function getMealData() {

    let dietChoice = user.diet;

    //if you change user stats or refresh page it the calories dont update first click  


    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate',
      params: {
        exclude: 'shellfish, olives',
        diet: `${dietChoice}`, 
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
        //I need to get the recipe IDs for the history and favourites list
    }).catch(function (error) {
        console.error(error);
    });
  }

  return (
    <div className="Main">
      <section className="controls">
        <div className="dropdown">
        <form className="form-group">
            <label htmlFor="dietPlan">Choose a diet plan:</label>
            <select value={user.diet} id="dietPlan" className="custom-select form-control" onChange={(e) => dietPlan(e.target.value)}>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Ketogenic">Ketogenic</option>
              <option value="Pescetarian">Pescetarian</option>
              <option value="Primal">Primal</option>
              <option value="Paleo">Paleo</option>
              <option value="Whole30">Whole-30</option>
            </select>
          </form>
          <form className="form-group">
            <label htmlFor="weightPlan">Choose a weight plan:</label>
            <select value={user.goal} id="weightPlan" className="custom-select form-control" onChange={(e) => weightPlan(e.target.value)}>
              <option value="-500">Lose Weight</option>
              <option value="0">Maintain Weight</option>
              <option value="500">Gain Weight</option>
            </select>
          </form>
        </div>
        <button onClick={getMealData}>Generate a Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData}/>}
    </div>
  );
}

export default Main;