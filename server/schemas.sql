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
CREATE TABLE address (
  id int NOT NULL AUTO_INCREMENT,
  street varchar(50),
  number int,
  city varchar(50),
  postalcode int NOT NULL,
  state varchar(30),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  name  varchar(50)   NOT NULL,
  email  varchar(50)   NOT NULL,
  address_id  int   NOT NULL,
  phoneNumber  int   NOT NULL,
  birthday  date   NOT NULL,
  type  varchar(30)   NOT NULL,
  password  varchar(30)   NOT NULL,
  item_Id  int,
  cart_Id  int,
  PRIMARY KEY (id),
  FOREIGN KEY (item_Id) 
        REFERENCES items(id)
        ON DELETE CASCADE,
  FOREIGN KEY (address_id) 
        REFERENCES address(id)
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


-- Query for dummy data
-- insert into items (name,description,price)value('laptop','descLaptop',14),('tennis','descTennis',15),('phone','descPhone',10),('computer','descComputer',12),('watch','descWatch',9);
-- insert into address (street, number, city, postalcode) values ('Market St', 123, 'San Francisco',94102),('Market St', 12123, 'San Francisco',94102),('Montgomery St', 123, 'San Francisco',94101),('Kearny St', 246, 'San Francisco',94108),('Battery st',1015,'San Francisco',94111);
-- insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('Allice','allice@allice.com', (SELECT id FROM address WHERE postalcode=94111) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='tennis'));
-- insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('John','john@john.com', (SELECT id FROM address WHERE postalcode=94101) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='laptop'));
-- insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('John','john@john.com', (SELECT id FROM address WHERE postalcode=94102 and number = 123) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='computer'));
-- insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('John','john@john.com', (SELECT id FROM address WHERE postalcode=94108) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='watch'));
-- insert into users (name,email,address_id,phoneNumber,birthday,type,password,item_Id) values ('John','john@john.com', (SELECT id FROM address WHERE postalcode=94101) ,48343432, '2015-6-9' ,'admin','password', (SELECT id FROM items WHERE name='phone'));

-- Query to retrieve items info.
-- select i.id,i.name,i.description,i.price,i.availability
-- from items i
-- inner join users s on i.id = s.item_Id
-- inner join address a on a.id  = s.address_id and a.postalcode = 94111;


-- select i.id,i.name,i.description,i.price,i.availability, s.name from items i inner join users s on i.id = s.item_Id inner join address a on a.id  = s.address_id and a.postalcode = 94111;

