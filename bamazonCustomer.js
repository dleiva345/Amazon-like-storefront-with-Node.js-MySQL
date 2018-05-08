var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bam_db"
});


var makePurchase = function() {
    connection.query('SELECT * FROM products', function(err, res) {
       

        //DISPLAYS ALL ITEMS FOR SALE 
        console.log("ITEMS AVAILABLE: ");
        for (var i = 0; i < res.length; i++) {
                  console.log([res[i].item_id, 
                   res[i].product_name, 
                   res[i].department_name,  
                   res[i].price,  
                   res[i].stock_quantity]);
                   
        }
        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

        inquirer.prompt([{
            name: "Id",
            type: "input",
            message: "What is the item ID you would like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        
        }, {
            name: "Quantity",
            type: "input",
            message: "How many of this item would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {
            var answerId = answer.Id - 1
            var answerProduct = res[answerId]
            var answerQuantity = answer.Quantity; 
                console.log(typeof answerQuantity);
            if (answerQuantity < res[answerId].stock_quantity) {
                console.log("Total for " + "(" + answer.Quantity + ")" + " - " + res[answerId].product_name + " is: " + res[answerId].price * answerQuantity);
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: res[answerId].stock_quantity - answerQuantity
                }, {
                    id: res[answerId].id
                }], function(err, res) {
                    //console.log(err);
                    makePurchase();
                });

            } else {
                console.log("Insufficient Quanity at this time. All we have is " + res[answerId].stock_quantity);
                makePurchase();
            }
        })
    })
}

makePurchase();
