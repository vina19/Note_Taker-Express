// npm package that will be use to function our server.
const express = require("express")

// Sets up basic properties for express server.
// Tell node that we are creating an "express" server.
const app = express();

// Sets an initial port to be use later in listener
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());