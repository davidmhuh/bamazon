var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     bamazon();
// });

function bamazonInventory() {
    connection.query("SELECT * FROM products", (err,res) => {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " " + res[i].product_name + " " + res[i].department_name + " " + res[i].price + " " + res[i].stock_quantity)
        }
    });
    bamazonCustomer();
}

function bamazonCustomer() {
connection.query("SELECT * FROM products", function(err, res){
    inquirer.prompt([
        {
        name: "id",
        type: "input",
        message: "ID for what you want"},
        {
        name: "quantity",
        type: "input",
        message: "How much you want??"
    }])
    .then(function(answer){
        var customer = parseInt(answer.id);
        for (var i = 0; i < res.length; i++) {
            var quantity = parseInt(res[i].stock_quantity)
        }

        if (customer > quantity) {
            console.log("insufficient quantity!");
            bamazonInventory();
        }
        else {
            console.log("thanks for purchase")
            bamazonInventory();
        }
        
    
        
        
    });

});

}

bamazonInventory();

