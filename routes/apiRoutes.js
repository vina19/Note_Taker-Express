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
    app.post("/api/notes", (req, res) => {

        // Read the database and retrieve notes body and 
        // set the number id to the notes body by looping the
        // notes array and increment the id number by one. 
        fs.readFile("./db/db.json", (err, data) => {
            
            if (err) throw err;

            let notes = JSON.parse(data);

            notes.push(req.body);

            for(let i = 0; i < notes.length; i++) {
                notes[i].id = i + 1;
            };

            // Rewrite the database with all the notes body and
            // the added unique id in the body,
            // and send those updated notes body to the database.
            fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
                if (err) throw err;
                res.send(noteData);
                console.log("Your note is successfully saved!");
            });
        });
    });

    // Delete the notes by its id 
    app.delete("/api/notes/:id", (req, res) => {

        // Read the database and get the note with the given id
        fs.readFile("./db/db.json", (err, data) => {

            if (err) throw err;

            let notes = JSON.parse(data);
            
            for(let i = 0; i < notes.length; i++) {
            
                if(notes[i].id == req.params.id) {
                    notes.splice(i, 1);
                    break;
                };
            };
            
        });
    });
};