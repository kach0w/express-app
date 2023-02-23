const express = require('express')
const flights = require('./routes/flights');
const airports = require('./routes/airports');

// const fs = require('fs');
const app = express()
const port = 3000
// const db = require('./database')

app.use(express.json());
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use('/api', flights);
app.use('/api/airports', airports)




 
// app.post('/add', function(req, res, next) {
//   var f_name = req.body.f_name;
//   var l_name = req.body.l_name;
//   var email = req.body.email;
//   var message = req.body.message;
 
//   var sql = `INSERT INTO contacts (f_name, l_name, email, message, created_at) VALUES ("${f_name}", "${l_name}", "${email}", "${message}", NOW())`;
//   db.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log('record inserted');
//     req.flash('success', 'Data added successfully!');
//     res.redirect('/');
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})