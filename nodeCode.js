// ------------------------------------above database connection is complete------------


const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_system",
});

// --------------------------putting values in table ---------------------

app.post("/create", (req, resp) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const year = req.body.year;

db.query("INSERT INTO emp (name,age,country,position,year) VALUES (?,?,?,?,?)",[name, age, country, position,year],(err, result) => {
      if (err) {
        console.log(err);
      } else {
        resp.send("inerted");
      }
    }
  );
});


// -----------------------printing & getting the value from table----------------

app.get("/employees", (req, resp) => {
  db.query("SELECT * FROM emp", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(result);
    }
  });
});

app.listen(5000);
