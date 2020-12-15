// Include path package to get the correct file path for the html
const path = require("path");

module.exports = function(app) {

    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

}