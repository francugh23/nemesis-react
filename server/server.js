// Functions and processes nalang siguro dito lahat.


import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors());

// Listener, i transfered this to app.js
// app.listen(8081, ()=> {
//   console.log("Listening")
// })

// Connection String by Darlito
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "nemesis",
// })

// Connection by Yohan
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  host: process.env.MYSQL_USERNAME,
  host: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_DATABASE
}).promise()

// Connection checker, also transferred to app.js
// db.connect(function(error) {
//   if(error) {
//     console.log("Error : " + error.message);
//   } else {
//     console.log("Connected");
//     // Send a success in frontEnd

//   }
// })

// Login Auth
app.post('/login', (req, res) => {
  const sql = "SELECT * FROM users WHERE username = ? AND password = ?"

  db.query(sql, [req.body.username, req.body.password], (err, data) => {
    if(err) return res.json('Error');
    if(data.length > 0) {
      return res.json(data);
    } else {
      return res.json('Failed');
    }
  })
})

// Get Student Type
app.get('/student-type', (req, res) => {
  const sql = "SELECT * FROM student_type";
  db.query(sql, (err, result) => {
    if (err) return res.json({Message: "Server error"});
    return res.json(result);
  })
})

// Get Student Gender
app.get('/gender', (req, res) => {
  const sql = "SELECT * FROM gender";
  db.query(sql, (err, result) => {
    if (err) return res.json({Message: "Server error"});
    return res.json(result);
  })
})


// Fetch Student Data
app.get('/fetch-student-data', (req, res) => {
  const sql = "SELECT *, DATE(birthdate) as bdate FROM students";

  db.query(sql, (err, data) => {
    if (err) return res.json("Server Error");
    return res.json(data)
  });
})