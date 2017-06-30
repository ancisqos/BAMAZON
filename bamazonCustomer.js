// Require modules
const mysql = require("mysql");
const inquirer = require("inquirer");

// Store credentials for connection to SQL database
const connection = mysql.createConnection({
	host: "127.0.0.1"
	port: 3306,

    // Username
	user: "root",

    // Password
	password: "root",
	database: "Bamazon"

});

// Create connection.
connection.connect(function(err) {
	if (err) throw err;
	startBam();
});

// use Inquirer?
function startBam() {
	inquirer
	  .prompt{
	  	name: "action",
	  	type: "list",
	  	message: "Welcome to Bamazon, the greatest internet marketplace in the history of internet marketplaces. How can we help you today?"
	 	// Code to "Display all of the items available for sale"
	  }
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