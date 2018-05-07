CREATE DATABASE bam_db;

USE bam_db;

CREATE TABLE products (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  -- Sets item_id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LAMP", "HOME", 25.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NYX LIQUID EYE LINER","BEAUTY",10.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TOWELS","HOME",8.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TENNIS BALLS","SPORTS",6.00,150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CARDS AGAINST HUMANITY","GAMES & TOYS",25.00,75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TEXAS TI-30X CALCULATOR","SCHOOL SUPPLY",15.00,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TOOTHPASTE","PHARMACY",6.00,30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HAIR BRUSH","BEAUTY",5.00,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("APPLES","FOOD",4.00,50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LITTLE DEBBIE SNACKS","FOOD",8.00,90);

SELECT * FROM products;
