DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE products (
   item_id INTEGER (10) AUTO_INCREMENT NOT NULL,
   product_name VARCHAR (30) NOT NULL,
   department_name VARCHAR (30) NOT NULL,
   price DECIMAL (4,4) NOT NULL,
   stock_quantity INTEGER (10) NOT NULL,
   PRIMARY KEY (item_id)
);