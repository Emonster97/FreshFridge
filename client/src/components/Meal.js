import React, { useState, useEffect } from 'react';
var axios = require("axios").default;

 export default function Meal({ meal }) {

  const [imageUrl, setImageUrl] = useState("");
  const [fav, setFav] = useState(false);

  function historyMeal() {
    axios.post("http://localhost:8081/api/history", {meal_id: meal.id, meal_title: meal.title, meal_sourceurl: meal.sourceUrl});
  }

  useEffect (() => {
    var options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal.id}/information`,
      headers: {
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': 'b94831634emsh9a21cbcbd82614ep1c7f5ejsn5205892eb94d'
      }
    };
    
    axios.request(options).then(function (response) {
      historyMeal();
      setImageUrl(response.data.image);
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
  }, [meal.id]);

  function favoriteMeal() {
    setFav(true);
    axios.post("http://localhost:8081/api/favourites", {meal_id: meal.id, meal_title: meal.title, meal_sourceurl: meal.sourceUrl});
  }

   return (
     <article>
       <h1>{meal.title}</h1>
       <img src={imageUrl} alt="recipe" />
       <ul>
         <li>Preperation time: {meal.readyInMinutes} minutes</li>
         <li>Number of Servings: {meal.servings}</li>
         <br/>
         {!fav && <li><button className="btn btn-primary" type ="button" onClick={favoriteMeal}>Favourite</button></li>}
         {fav && <li>Favourited!</li>}
       </ul>

       <a href={meal.sourceUrl}>Go to Recipe</a>
     </article>
   )
 }