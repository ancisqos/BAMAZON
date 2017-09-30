# BAMAZON

## Overview

Bamazon is an Amazon-like digital store front run through the command line. It is built using MySQL, Node JS, and the Inquirer NPM package. Bamazon presents customers with a table of products that are available for purchase. The customer inputs the product's ID number to make a selection, specifies quantity, and confirms purcahse. The app then updates the inventory in the MySQL database.

## Walkthrough

1. In terminal/bash, run 'git clone https://github.com/ancisqos/BAMAZON.git'. Then change to the BAMAZON directory.

2. Run 'npm install' to install all the dependencies of the project.

3. Also turn on MAMP to connect to local host, and MySQL Workbench for MySQL.

4. Once those two are up, run 'nodemon NewBamazon.js'. You will be presented with a table of products with their item ID's, department names, prices, and stock quantities along with a question instantiated by Inquirer.

	<img src="/img/pic1.PNG" alt=sql-1>

5. The app will ask you for the ID of the product you want. Inputting an ID number will prompt you to specify the quantity of the item you'd like to purchase.

	 <img src="/img/pic2.PNG" alt=sql-1>

6. Once you specify the quantity, it will inform you that you have successfully purchased the product in the number quantity you stated and will update the number of quantity in stock.

	 <img src="/img/pic3.PNG" alt=sql-1>

7. If you purchase something that is out of stock, the following message will appear:

	 <img src="/img/pic4.PNG" alt=sql-1>

8. Additionally, if you input an ID number that is not in the table, the app will notify you that it does not exist:

	 <img src="/img/pic5.PNG" alt=sql-1>

9. To quit the app, type Q and hit enter.

	 <img src="/img/pic6.PNG" alt=sql-1>