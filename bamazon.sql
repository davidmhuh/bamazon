CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50),
department_name VARCHAR(50),
price SMALLINT(10),
stock_quantity INT(11),
PRIMARY KEY(item_id)
);

drop tables products;

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("fidget spinner", "crap", 5, 1000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("hover board", "extreme crap", 100, 150);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("wild wacky action bike", "south park", 80, 15);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("alabama man", "south park", 25, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("zbox", "microhard", 400, 2500);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("fortday", "gaming", 60, 10000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("robot cleaner", "scare cat", 250, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("mop", "cleaning product", 15, 10000);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("milk", "dairy", 5, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("brand name purse", "womens luxury", 500, 20);

