
CREATE USER 'sameer'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234';

GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'sameer'@'localhost' WITH GRANT OPTION;

CREATE DATABASE ppa;

USE ppa;

Create Table Customers(
	CustomerID INT AUTO_INCREMENT,
	CustomerName VARCHAR(100) NOT NULL,
	CustomerEmail VARCHAR(100) NOT NULL UNIQUE,
	CustomerDesign VARCHAR(255) NOT NULL,
	CustomerCompany VARCHAR(255) NOT NULL,
	CustomerPhoneNO DECIMAL(10) NOT NULL UNIQUE,
	PRIMARY KEY(CustomerID)
);
