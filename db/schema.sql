DROP TABLE IF EXISTS employee_db
CREATE DATABASE employee_db

USE employee_db

-- creates a table for 
CREATE TABLE Employees (
  id INT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
);

CREATE TABLE Engineer (
  id INT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  github VARCHAR(30) NOT NULL,
);

CREATE TABLE Intern (
  id INT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  school VARCHAR(30) NOT NULL,
);

CREATE TABLE Manager (
  id INT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  LastName VARCHAR(30) NOT NULL,
  email VARCHAR(100) NOT NULL,
  officeNumber VARCHAR(30) NOT NULL,
);

