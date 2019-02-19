DROP TABLE orders;
DROP TABLE customers;
CREATE TABLE IF NOT EXISTS customers (
         id SERIAL,
         customerId   char(16)     NOT NULL DEFAULT '',
         firstName    VARCHAR(30)   NOT NULL DEFAULT '',
         lastName     VARCHAR(30)   NOT NULL,
         PRIMARY KEY  (customerId)
       );

INSERT INTO customers(customerId, firstName, lastName) values
        ('customer-321', 'MR. John', 'Goodman'),
        ('customer-322', 'MR. Sam', 'Gandalf');


CREATE TABLE IF NOT EXISTS orders (
         id  SERIAL,
         orderId   char(16)  NOT NULL DEFAULT '',
         customerId   char(16)  REFERENCES customers(customerId),
         item    VARCHAR(30) NOT NULL DEFAULT '',
         quantity INT NOT NULL,
         PRIMARY KEY  (orderId)
       );

