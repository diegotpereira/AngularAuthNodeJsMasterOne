
export function connectToMySql()
{
var mysql = require('mysql');  
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "niit"  
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected to mysql!");  
});  
}
//connectToMySql();
