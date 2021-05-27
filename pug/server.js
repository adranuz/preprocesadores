// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
app.set("view engine", "pug");

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

const sample_data = {
  company_name: "Glitch",
  water_flavors: [
    "grapefruit",
    "tangerine",
    "berry",
    "mango",
    "lime",
    "lemon",
    "cursed coconut"
  ]
};

/*  
 This is where we're calling the template, and passing our sample data along.
*/ 
app.get("/", function(request, response) {
  response.render("index", sample_data);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
