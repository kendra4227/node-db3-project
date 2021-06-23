-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
Select c.CategoryName,
p.ProductName
 from Product P 
 join Category C --When I join both tables by CategoryName & ProductName it gives me 616 records?
 on P.id = C.id --Only gives me 8 records

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT
  Id,
  CompanyName
FROM [Order] as O
JOIN Shipper as S on O.ShipVia = S.Id
WHERE
  OrderDate >= '2015-08-09' 

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
  *
from Order O
JOIN OrderDetail OD on O.id = OD.OrderId
JOIN Product P on OD.ProductId = P.id
WHERE
  O.Id = 10251 
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
  Id,
  LastName,
  CompanyName
from [Order] as O
JOIN Employee as E on O.EmployeeId = E.Id
JOIN Customer as C on O.CustomerId = C.Id