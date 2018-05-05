# Amazon-like storefront with Node.js & MySQL

## Overview
This application uses Node.js and MySQL to display items that are available for sale and includes ids, product names, prices, and quantity. The application
prompts the user to enter the id of products that they are interested in buying and the quantity amount that they would like for the item.
After the application has recive customer input it will run a search to see if request can be met.

## Getting Started
    * Clone Repo
    * In Terminal us command line to find file name Amazon-like-storefront-with-Node.js-MySQL
    * Once inside file run command node to use application
    * The following data should appear

| department_id | product_name         | department_name | price   | stock_quantity |
| ------------- | ---------------      | --------------- | ------- | ------------   |
| 01            | NYX LIQUID EYE LINER | BEAUTY          | 10.00   | 200            |
| 02            | TOOTHPASTE           | PRARMACY        | 6.00    | 30             |

    * customer would then be prompted to answer the following questions: 
        * What is the ID of the product you would like to buy?
        * how many units of the product would you like to buy? 

After customer has answer the questions the application will check if store has enough of the product to meet the customer's request and will estimate cost and update SQL database to update quantity.
If not, the application will log a phrase `Insufficient quantity!`, and prevent the order from going through.

## Technologie Used
    * JavaScript
    * Node.Js
    * Inquirer NPM Package
    * Mysql NPM Package 
