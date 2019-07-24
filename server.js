// Dependencies
// =============================================================
var express = require("express");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));


//routes
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });