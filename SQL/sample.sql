
create table customer(
customerID int,
customerName varchar(20),
Email varchar(255),
Address varchar(100),
primary key(customerID)
);

alter table customer add phoneNumber int(10) after Email;
alter table customer add PANnumber varchar(10) unique after phoneNumber;
alter table customer rename column Email to EmailAddress;
alter table customer drop column PANnumber;
describe customer;

insert into customer values(10 ,'sujeeth','sujeeth@gmail.com',900647550,'dshdfvsh'),
(11 ,'aswanth','aswanth@gmail.com',900647951,'dshdfevsh'),
(122 ,'aswath','aswath@gmail.com',900647552,'dshdftvsh'),
(13 ,'sri','sri@gmail.com',900647953,'dshdfsvsh'),
(14 ,'vikram','vikram@gmail.com',900647954,'dshdfvnsh'),
(15 ,'jai','jai@gmail.com',900647955,'dshadfvsh'),
(16 ,'ram','ram@gmail.com',900647956,'dschdfvsh'),
(17 ,'vicky','vicky@gmail.com',900675957,'dshdxfvsh'),
(18 ,'kavin','kavin@gmail.com',900647958,'dshdfvvsh'),
(19 ,'pravin','pravin@gmail.com',900475959,'dshdfbvsh');

delete from customer where customerID = 12;
select * from customer;

create table order(
orderID int,
productName varchar(20),
Email varchar(255),
Address varchar(100),
primary key(customerID)
);

