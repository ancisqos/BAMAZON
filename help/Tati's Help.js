/* Create a new array based off mysql results */
connection.query("SELECT * FROM products", function(err, res) {
	if (err) throw err;
	
	// We're using Array.prototype.map here
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	// For "map" you use a callback function that will create a new array based on the values of the old array
	// NOTE: I also noticed that inquirer only likes to receive strings as input so we'll make sure it's one
	const resultIds = res.map(function(result) {
		return String(result.item_id);
	});

	// Also you can simplify this line with arrow functions, but it's not super necessary
	// This code is equivalent to the above, so you can feel absolutely free to delete it. It's just an example in case you wanted to learn to use those as well. 
	const resultIds = res.map(result => String(result.item_id));

	// Now you can pass this into inquirer as the choices

	inquirer.prompt([
		{
			name: "product choice",
			type: "list",
			message: "What is the ID number of the product you would like to buy?",
			choices: resultIds
		}
	])
	.then(function(answer) {
		// At this point, I would use the id to grab the selected item from you results
		// For this we can use another Array method, this one is Array.prototype.filter
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		// .filter is a method to take an array and return a new array based on some filtering terms
		// We only want 1 element from the new array so I'm going to use [0]

		const selectedResult = res.filter(result => String(result.item_id) === answer)[0];

		// now that we have the selected result we can do some logic like this

		if(selectedResult.stockQuantity == 0) {
			console.log("That item is out of stock, sorry!");
		}
	})
})