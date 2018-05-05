DROP DATABASE IF EXISTS bamazon_DB;
CREATE database bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name  VARCHAR(200) NOT NULL,
  department_name VARCHAR(200) NOT NULL,
  price DECIMAL(100,4) NOT NULL,
  stock_quantity INT(100) NOT NULL,
  
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("LAMP", "HOME", 25.00, 100),
       ("NYX LIQUID EYE LINER","BEAUTY",10.00, 200),
       ("TOWELS","HOME",8.00, 50),
       ("TENNIS BALLS","SPORTS",6.00,150),
       ("CARDS AGAINST HUMANITY","GAMES & TOYS",25.00,75),
       ("TEXAS TI-30X CALCULATOR","SCHOOL SUPPLY",15.00,20),
       ("TOOTHPASTE","PHARMACY",6.00,30),
       ("HAIR BRUSH","BEAUTY",5.00,10),
       ("APPLES","FOOD",4.00,50),
       ("LITTLE DEBBIE SNACKS","FOOD",8.00,90)