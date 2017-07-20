CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INTEGER(10) DEFAULT 0 NOT NULL,
    stock_quantity INTEGER(10) DEFAULT 0 NOT NULL,
    PRIMARY KEY(id)
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon 5D", "Camera", 1100, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Canon 5D M3", "Camera", 2300, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wide Angle Lens", "Lens", 500, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("50mm Sigma Lens", "Lens", 650, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Telephoto Lens", "Lens",900, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("32GB Memory Card", "Accessories", 90, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gorilla Pod", "Gear", 50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tripod", "Gear", 120, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flash", "Lighting", 140, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Softbox", "Lighting", 230, 12);