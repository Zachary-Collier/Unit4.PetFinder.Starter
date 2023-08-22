// import the pets array from data.js
// My notes indicated that require is used to import
const pets = require("./data");

// init express app
const express = require("express");
const app = express();

const PORT = 8081; //changed the port from 8080 to 8081

//should be using middle ware here I believe
app.use(express.static("public"));

// GET - / - returns homepage
// you need to set the backslash /, like how is it done on the home page
// you need to send the index.html
app.get("/", (request, respond) => {
  respond.send("./index.html");
});

// hello world route
app.get("/api", (request, respond) => {
  respond.send("Hello World, you are now at Block 31!");
});

// get all pets from the database
// you need to set the response to send the pets chico
// don't forget that you are requiring this important data from the data.js file
app.get("/api/v1/pets", (request, respond) => {
  respond.send(pets);
});

// get pet by owner with query string
// you need to set deconstructed owner to request.query
//  you need to console log the owner to view the output
// you need to send the response to pet
app.get("/api/v1/pets/owner", (request, response) => {
  const { owner } = request.query;
  console.log(`You are getting the pets owner, ${owner}`);

  // find the pet in the pets array
  // you need to use the pets.find method and pet.owner
  const pet = pets.find((pet) => pet.owner === owner);

  // send the pet as a response
  respond.send(pet);
});

// get pet by name
// you need to set deconstructed name to request.params.name
// send the pet as a response

app.get("/api/v1/pets/:name", (req, res) => {
  const { name } = request.params.name;

  // find the pet in the pets array
  const pet = pets.find((pet) => pet.name === name);
  response.send(pet);
});

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});

// this code indicates thta I can use the data in another file that has a variable called app.
module.exports = app;
