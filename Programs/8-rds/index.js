const express = require("express");
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "harshdeb1.ch8giy4subi2.ap-south-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database: "testinitialdb",
});

connection.connect((err) => {
    if (err) {
        console.log("Error connecting to database", err);
    } else {
        console.log("Connected to database");
    }
});

let app = express();

app.get("/api/users", (req, res) => {
    let sqlQuery = "SELECT * FROM students";
    connection.query(sqlQuery, (err, result) => {
        if (err) {
            console.log("Error executing query", err);
            res.status(500).send("Error executing query");
        } else {
            res.send(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
