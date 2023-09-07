const express = require('express')
const path = require('path')
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express ()


app.use(express.static(path.join(__dirname, '..', 'front-end', 'public')))
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Newton@2001',
  database: 'cakeShop',
  authPlugins: { mysql_clear_password: () => () => Buffer.from('Newton@2001') },
})

db.connect( err => {
  if(err) throw err;
  console.log('DB connected');
})

app.post('/submit', (req, res) => {
  const {userid, fname, lname, gender, dob, email, phone, password, confirmPassword, terms} = req.body;
  const insertQuery = 'INSERT INTO registor_form (UserID, First_Name, Last_Name, Gender, DOB, Email, Mobile_Number, Password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(insertQuery, [userid, fname, lname, gender, dob, email, phone, password], (err, result) => {
      if (err) {
          console.error(err);
          res.send('<h1>Registration failed</h1>');
      } else {
          res.send('<h1>Registration successful</h1>');
      }
  });
});

app.get('^/$|/index(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'index.html'));
})

app.get('/registor(.html)?', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'registor.html'))
})

app.listen(8000, () => console.log('server listen at port 8000'))