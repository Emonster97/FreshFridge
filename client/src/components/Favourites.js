import React, { useState, useEffect } from "react";
import axios from "axios";

//This needs to be populated with the recipes from the current meal plan 
const data = [
];

//GET https://api.spoonacular.com/recipes/{id}/information
//show recipe link and title meal.title meal.sourceUrl

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8081/api/favourites").then(res => {
      setFavourites(res.data);
    })
  }, []);

  useEffect(() => {
    console.log(favourites);
  }, [favourites]);

  function handleFavourite(id) {
    const newFavourites = favourites.map(item => {
      return item.id === id ? { ...item, favourite: !item.favourite } : item;
    });

    setFavourites(newFavourites);
  }

  function clickUnfavorite(event) {
    let id = event.target.parentElement.id;
    axios.delete("http://localhost:8081/api/favourites", { data: { recipe_id: id } }).then(res => {
      console.log(res);
      setFavourites(res.data);
    });
  }

  return (
    <div className="Favourites">
      <h1><u>Favourites list</u></h1><br/><br/>
      <ul className="favlist">
        {favourites.map((item, index) =>
          <li key={index} id={item.recipe_id}>
            <h3>{item.title}</h3><br/><br/>
            Recipe Link:<a href={item.sourceurl}>{item.sourceurl}</a><br/><br/><button type="button" class="btn btn-primary"onClick={clickUnfavorite}>Unfavourite</button><hr></hr>
          </li>
        )}
      </ul>
    </div>
  );
}