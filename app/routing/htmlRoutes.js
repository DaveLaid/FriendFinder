// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


module.exports = function(app) {
// Routes
// =============================================================
// Basic route that sends the user first to the home page (AJAX Page)
app.get("/survey", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// app.get("/survey", function(req, res) {
// 	res.sendFile(path.join(__dirname, "chosen.min.css"));
// });

// If no matching route is found default to home
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
});


};
