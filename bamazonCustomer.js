// Require modules
const mysql = require("mysql");
const inquirer = require("inquirer");

// Store credentials for connection to SQL database
const connection = mysql.createConnection({
	host: "127.0.0.1",
	port: 3306,

    // Username
	user: "root",

    // Password
	password: "root",
	database: "Bamazon"

});

// Create connection
connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	console.log("------------------------------");
	startBam();
	idBam();
	// quantityBam();
});

// Code to "Display all of the items available for sale"
function startBam() {
	connection.query("SELECT * FROM products", function(err, res) {
		for (var i = 0; i < res.length; i++) {
			console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
		}
		console.log("------------------------------");
	});
}

// Code to 
function idBam() {

	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;

		const resultIds = res.map(function(result) {
			return String(result.item_id);
		});

		inquirer.prompt([
		   {
		   	    name: "product choice",
		   	    type: "input",
		   	    message: "What is the ID number of the product you would like to buy?",
                choices: resultIds
		   	}
		])
		.then(function(answer) {
		   	    
		   	    const selectedResult = res.filter(result => String(result.item_id) === answer)[0];

		   	    if (selectedResult.stock_quantity === 0) {
		   	    	console.log("That item is out of stock, sorry!");
		   	    } 
		   	});
	});
}
      
//Prompt users with two choices:

// 1. Ask for ID of product they would like to buy
// 2. Ask how many units of the product they would like to buy

// Function to search database for item and quantity
    // If/Else statement or Switch/Case

    // if insuffificent, log "Insufficient quantity! and stop order"

    // if in stock, fulfill customer's order:
        // update SQL database to reflect remaining quantity
        // show customer total cost of their purchase