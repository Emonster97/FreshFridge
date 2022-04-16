import React, { useState, useEffect } from "react";

//This needs to be populated with the recipes from the current meal plan 
const data = [
  { id: 1, name: "Recipe 1" },
  { id: 2, name: "Recipe 2" },
  { id: 3, name: "Recipe 3" }
];

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    setFavourites(data);
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

  return (
    <div className="App">
      <h1>Your Current Meal Plan</h1>
      <ul>
        {favourites.map((item, i) => (
          <li key={i}>
            {item.name}{" "}
            <button
              onClick={() => {
                handleFavourite(item.id);
              }}
            >
              {item.favourite === true ? "Remove" : "Add to Favourites"}
            </button>
          </li>
        ))}
      </ul>

      <h1>Favourite list</h1>
      <ul>
        {favourites.map(item =>
          item.favourite === true ? <li key={item.id}>{item.name}</li> : null
        )}
      </ul>
    </div>
  );
}