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


var bamazonCustomer = function() {
connection.query("SELECT * FROM products", function(err, res2){
    if (err) throw err;
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
        for (var i = 0; i < res2.length; i++) {
            var userBuy = (answer.quantity);
            var stock = parseInt(res2[customer].stock_quantity);


            
        }

        if (userBuy > stock) {
            console.log("insufficient quantity!");
            bamazonInventory();
        }
        else {
            console.log("thanks for purchase")
            var current = stock - userBuy;
            connection.query("UPDATE products SET stock_quantity=" + current + "WHERE product_name = " + customer + "", function(err, res){
                console.log("sold!");
                bamazonInventory();
                
            })
            console.log(current)
        }
        
            
    })


    });
};



bamazonInventory();

