var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  
});
//DISPLAY DATABASE
function displayProducts() {
    connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;
    });
}
//PROMPT USER TO ENTER ID AND QUANTITY
function promptUsers() {
  inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "What is the ID of the product you would like to buy?",
    }, {  
       name: "quantity",
       type: "input",
       message: "how many units of the product would you like to buy?", 
    })
    .then(function(answer) {
      var query = "SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?";
      connection.query(query, { item_id: answer.id }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
              "ID: " + 
              res[i].item_id + 
              " || Product Name: " +
              res[i].product_name  + 
              " || Department Name: " +
              res[i].department_name  + 
              " || Price: " + 
              res[i].price +
              " || Quantity: " +
              res[i].stock_quantity
          );
        }
        promptUsers();
      });
    });
}



function promptUsers() {
  inquirer
    .prompt([
      {
        name: "Id",
        type: "input",
        message: "What is the ID of the product you would like to buy? ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "how many units of the product would you like to buy? ",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
      connection.query(query, [answer.start, answer.end], function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(
            "Position: " +
              res[i].position +
              " || Song: " +
              res[i].song +
              " || Artist: " +
              res[i].artist +
              " || Year: " +
              res[i].year
          );
        }
        runSearch();
      });
    });
}

