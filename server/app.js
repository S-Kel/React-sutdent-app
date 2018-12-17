const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// No database... keep it simple
const students = ["Jack", "Jane", "John"];

// Parse application/json
app.use(bodyParser.json());

// Use cors to allow the client to be at a different origin to server
// without this, the browser would block requests //#endregion
app.use("/api/", cors());

// Return all students
app.get("/api/students", (req, res) => {
    res.json(students);
});

// Create a new student
app.post("/api/students", (req, res) => {
    const student = req.body.student;
    students.push(student);
    res.json(student);
});

// We'll use port 3001 so we can run react dev server on 3000
app.listen(3001, () =>
    console.log('Listening on http://localhost:3001')
);