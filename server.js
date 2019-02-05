var express = require('express');
var path = require("path");
var apiRoutes = require("./app/routing/apiroutes");
var htmlRoutes = require("./app/routing/htmlroutes");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.use(express.static(path.join(__dirname, "app/public")));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
