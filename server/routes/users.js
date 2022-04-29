// -- routes/catRoutes.js
const router = require('express').Router();
//yes
module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}
//set up user with all needed params
//change front-end context to start using the backend database for all user info
