// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let reservations = [];

let waitList = [];

// Routes 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays table reservations
app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

// Displays waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});

// Clears table reservation list
app.post("/api/clear", function(req, res) {
    reservations = [];
    waitList = [];
});

// Create New Reservation - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
    
    console.log(newReservation);

    if (reservations.length < 5) {
        reservations.push(newReservation);
        res.json(true);
    } else {
        waitList.push(newReservation);
        res.json(false);
    }
  
});






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
});