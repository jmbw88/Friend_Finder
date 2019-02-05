var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
