// Linking the routes to the data source.
const noteData = require("../db/db.json");

// Routing
module.exports = function(app) {
    
    // API GET Requests to get the data and show it to the user when
    // the user visit the site
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
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