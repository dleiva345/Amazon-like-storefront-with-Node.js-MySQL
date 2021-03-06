# Amazon-like storefront with Node.js & MySQL

## Overview
This application uses Node.js and MySQL to display items that are available for sale and includes ids, product names, prices, and quantity. The application
prompts the customer to enter the id of products that they are interested in buying and the quantity amount that they would like to purchase.
After the application has receive the customer input it will run a search to see if request can be met.

## Getting Started
    * Clone Repo
    * In Terminal use command line to find file name Amazon-like-storefront-with-Node.js-MySQL
    * Once inside file run command node bamazonCustomer.js
   
     * customer would then be prompted to answer the following questions: 
        * What is the ID of the product you would like to buy?
        * how many units of the product would you like to buy? 
        
![captureitemid](https://user-images.githubusercontent.com/32282229/39898744-2e653770-5486-11e8-94cb-2392c04c68bb.PNG)


![capturehowmany](https://user-images.githubusercontent.com/32282229/39898883-e234557e-5486-11e8-8828-21b376de83b9.PNG)

After customer has answer the questions the application will check if store has enough of the product to meet the customer's request and will estimate quantity total
If not, the application will log a phrase `Insufficient quantity!`, and prevent the order from going through.

## Technologie Used
    * JavaScript
    * Node.Js
    * Inquirer NPM Package
    * Mysql NPM Package 
