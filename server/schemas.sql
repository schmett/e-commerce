CREATE DATABASE ecommerce;

USE ecommerce;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(200)  NOT NULL,
  price int NOT NULL,
  availability boolean,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name  varchar(50)   NOT NULL,
  email  varchar(50)   NOT NULL,
  address  varchar(250)   NOT NULL,
  phoneNumber  int   NOT NULL,
  birthday  date   NOT NULL,
  type  varchar(30)   NOT NULL,
  password  varchar(30)   NOT NULL,
  item_Id  int,
  cart_Id  int,
  PRIMARY KEY (id),
  FOREIGN KEY (item_Id) 
        REFERENCES items(id)
        ON DELETE CASCADE
);

CREATE TABLE cart (
  id       int   NOT NULL AUTO_INCREMENT,
  user_Id  int   NOT NULL,
  item_Id  int   NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (user_Id) 
        REFERENCES users(id)
        ON DELETE CASCADE,
  FOREIGN KEY (item_Id) 
        REFERENCES items(id)
        ON DELETE CASCADE
);


alter table users add FOREIGN KEY (cart_Id) REFERENCES cart(id) ON DELETE CASCADE;
