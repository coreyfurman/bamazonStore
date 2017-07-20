var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon"
});

function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}

function promtUserPurchase() {
	
	inquirer.prompt([
		{
			type: 'input',
			name: 'id',
			message: 'Please enter the Item ID which you would like to purchase',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {

		var item = inpud.id;
		var quantity = input.quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {id: item}), function(err, data) {
			if (err) throw err;
			if (data.length === 0){
				console.log('ERROR: Invalid Item ID. Please select a valid ID');
				displayInventory();
			} else {
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log("Stock Available! Placing order");

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE id =' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Order placed! Your total is $' + productData.stock_quantity - quantity) + ' WHERE id = ' + item;
						console.log('Thank you for your order!');
						console.log("\n----------------------------------------------\n");

						displayInventory();
					})
				}
			}
		}
	})

	function displayInventory() {
		queryStr = 'SELECT * FROM products';

		connection.query(queryStr, function(err, data) {
		if (err) throw err;
		
		console.log('Existing Inventory: ');
		console.log('......................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].id + ' // ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			 
			strOut += ''
		}	
		})
	}


}