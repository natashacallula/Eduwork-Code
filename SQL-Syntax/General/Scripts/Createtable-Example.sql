create database mydatabase;
use mydatabase;

create table persons(
person_id int primary KEY,
last_name varchar(255),
first_name varchar(255),
address varchar(255),
city varchar(255)
);