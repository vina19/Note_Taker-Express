// Require fs to read and write the database.
const fs = require("fs");

// Require path for mapping to where the database located.
const path = require("path");

// Linking the routes to the data source.
const noteData = require("../db/db.json");

// Routing
module.exports = function(app) {
    
    // API GET Requests to get the data and show it to the user when
    // the user visit the site.
    // Retrieve the data notes from the database using fs readFile module. 
    app.get("/api/notes", (req, res) => {

        fs.readFile("./db/db.json", (err, data) => {
            if (err) throw err;
            
            res.json(JSON.parse(data));
        });
    });

    // API POST Requests to handle the note that the user submits and 
    // send those data to the server.
    app.post("/api/notes", function(req, res) {
        
        let newNotes = req.body;

        console.log(newNotes);

        noteData.push(newNotes);

        res.json(newNotes);
    });
};