const mysql = require('mysql');

const con = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6499099",
  password: "tHKIraxN1L"
});

export default function handler(request, response) {

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  response.status(200).json({
    msg: "Connected",
  });
});

}