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

let reservations = [
    {
        name: `Jason`,
        phoneNumber: 1234567890,
        email: `jason@tester.com`,
        uniqueID: 1321
    },
    {
        name: `David`,
        phoneNumber: 0987654321,
        email: `David@tester.com`,
        uniqueID: 1452
    },
    {
        name: `Mike`,
        phoneNumber: 1029384756,
        email: `Mike@gtester.com`,
        uniqueID: 1823
    },
    {
        name: `testName2`,
        phoneNumber: 1234567890,
        email: `test@gmail.com`,
        uniqueID: 1321
    },
    {
        name: `testName3`,
        phoneNumber: 1234567890,
        email: `test@gmail.com`,
        uniqueID: 1321
    }

];

let waitList = [
    {
        name: `testWait`,
        phoneNumber: 1234567890,
        email: `test@gmail.com`,
        uniqueID: 1321
    },
    {
        name: `testWait2`,
        phoneNumber: 1234567890,
        email: `test@gmail.com`,
        uniqueID: 1321
    }
];

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
  






// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
});