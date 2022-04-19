var express = require('express');
var router = express.Router();

const favouriteRoutes = require("./favourites");

router.use("/favourites", favouriteRoutes(db));

module.exports = router;
