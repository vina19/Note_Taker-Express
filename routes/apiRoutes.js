// Linking the routes to the data source.
const noteData = require("../db/db.json");

// Routing
module.exports = function(app) {
    
    // API GET Requests to get the data and show it to the user when
    // the user visit the site
    app.get("/api/notes", function(req, res) {
        res.json(noteData);
    });

};