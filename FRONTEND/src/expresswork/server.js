var express = require('express');
var mysql = require('mysql');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/" + "register.html");
})

app.get('/register', function (req, res) {
  response = {
    email: req.query.emailBox,
    password: req.query.passwordBox,
    rePassword: req.query.rePasswordBox
  };
  console.log(response);
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'niit',
    database: 'fullstackdb'
  });
  connection.connect();
  console.log("connected to mysql");
  var registrationData = response;
  var query = connection.query('insert into registration set ?', registrationData, function (err, result) {
    if (err) {
      console.error(err);
      return res.send(err);
    } else {
      return res.send('Ok');
    }
    res.end(JSON.stringify(response));

    //res.end();
  })
})

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("connecting to mysql app listening at http://%s:%s", host, port)
})


