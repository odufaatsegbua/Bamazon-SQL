Bamazon-SQL Overview
The Bamazon-SQL app is a customer facing digital storefront. The app was created to take in orders from customers and deplete stock from the store's inventory after each purchase.

First, I created at a database in SQL of all the products available for purchase with the following table:
![table](/images/sqltable.png)

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)


Then I created a Node application called bamazonCustomer.js where we will run the commands for the users to purchase items. 
The app will first display all of the items available for sale -- including each item id, name of product, price of product and stock quantity.

![display](/images/bamazon-display.png)

The app will then prompt users with two messages.
1. Which product ID would you like to buy?
2. What quantity would you like to purchase?

Once the customer has placed an order, the app will check if the store has enough of each product in stock in order to meet the customer's request.

![purchase](/images/bamazon-purchase.png)

If there is not enough in stock, the app should log "Sorry we are out of stock" in the console, which prevents the order from going through.

![outofstock](/images/bamazon-outofstock.png)
![outofstock](/images/bamazon-oos2.png)



