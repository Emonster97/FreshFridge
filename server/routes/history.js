const router = require('express').Router();
const axios = require("axios");

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM history";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  router.post('/', (req, res) => {
    let meal_id = req.body.meal_id;
    let meal_title = req.body.meal_title;
    let meal_sourceurl = req.body.meal_sourceurl;
    const command = "INSERT INTO history (recipe_id, title, sourceurl) VALUES ($1, $2, $3)";
    db.query(command, [meal_id, meal_title, meal_sourceurl]).then(cmd => {
      console.log(cmd);
      res.send(200);
    });
  });

  return router;
}