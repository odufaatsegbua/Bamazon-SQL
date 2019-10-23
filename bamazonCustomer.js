var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Section.80",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
// this line is how we connect to database in SQL
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    startBid ();
  });

//   The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
  function startBid () {
// display all the items and allow user to chose what they will buy
connection.query("select * from products",function(err, res){
    if(err) {
    console.log("error");
    }
    console.table(res);
    inquirer
    .prompt([
        {
        name: "userProduct",
        type: "input",
        message: "Which product ID would you like to buy",
    
      },

      {
        name: "userQuantity",
        type: "input",
        message: "What is the quantity you would like to purchase?",

      }
    ])
})
  }
  .then(function(answerChoice) {
      connection.query("select * from products where item_id =" + answerChoice.user.Product)
    // -- first we'll enter the ID of the product user wants to buy

    // -- then we'll check to see if there is enough in stock to fulfill request  



    //     // Use user feedback
    //     console.log(answerChoice);
    //     if(answerChoice.userChoice === "post"){
    //       postItem();
    //     } else if(answerChoice.userChoice === "bid"){
    //         bidItem();
    //       }
    //     })
    //   };