DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
   item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
   product_name VARCHAR (30) NOT NULL,
   department_name VARCHAR (30) NOT NULL,
   price DECIMAL (10,2) NOT NULL,
   stock_quantity INTEGER (10) NOT NULL,
   PRIMARY KEY (item_id)
);

SELECT * FROM Bamazon.products;

-- item_id,product_name,department_name,price,stock_quantity

-- 1001,"Nintendo Switch","Video Games",549.95,0
-- 1002,"New Nintendo 2DS XL","Video Games",150.00,40
-- 1003,"Nintendo Classic Mini","Video Games",289.95,0
-- 1004,"Switch Horipad Controller","Video Games",29.99,25
-- 1005,"Nintendo 3DS XL","Video Games",115.99,10
-- 2001,"Beats Solo 3","Audio Electronics",250.00,20
-- 3001,"Surfcast Rod","Outdoor Sports",99.99,10
-- 4001,"Force FX Lightsaber","Toys and Games",114.99,5
-- 4002,"Jedi Robe Deluxe","Toys and Games",49.99,7
-- 5001,"Men's Military Jacket",Apparel,35.00,15
