
var axios = require("axios");
var fs = require("fs");

// var express = require("express");

// var app = express();
// var PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });

//   app.get("/", function(req, res) {
//     res.send("Welcome to the Star Wars Page!");
//   });
// $(document).ready(function () {
//    
// });

getValue();

function getValue() {
    fs.readFile("price.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataRdm = data.split("\n");

        for (var i = 0; i < dataRdm.length; i++) {
            var prices = dataRdm[i].split(",");
            //console.log(prices);
            var rawChange = prices[1] - prices[0];
            var change = rawChange.toFixed(2);
            //console.log(change);
            makeChange(change);
        }
    })
}

function makeChange(change) {
    //creating variable for the 'twist the customer asked for so that it can be easily changed if needed
    var twist = 3; 
    //change will not be needed if the buyer pays the exact amount 
    if (change == 0.00) {
        console.log(change + " || " + " NO CHANGE NEEDED" +
            "\n" + "*********************************************************************************************************");
    }

    //condition for when the change due is not divisible by 3 
    else if (change % twist != 0) {
        var cents = change * 100; // 1.68 = 168
        var totalDollar = (cents / 100) >> 0; //1   
        var remaining = change - totalDollar; // .68 
        var totalQuarter = (remaining / .25) >> 0; // 2 
        var lessQuarter = remaining - (totalQuarter * .25) //.18
        var totalDime = (lessQuarter / .10) >> 0; // 1 
        var lessDime = lessQuarter - (totalDime * .10) // .08
        var totalNickel = (lessDime / .05) >> 0; // 1
        var lessNickel = lessDime - (totalNickel * .05) // .03
        var totalPenny = (lessNickel / .01).toFixed(0); //.03

        // try to create conditional statements to only display change that != 0 ie if totalquarter = 0 then dont print it 

        console.log(change + " || " + totalDollar + " dollar(s) " + totalQuarter + " Quarter(s) " + totalDime + " Dime(s) "
            + totalNickel + " Nickel(s) " + totalPenny + " Pennie(s) " +
            "\n" + "*********************************************************************************************************");

            // if (totalDollar != 0) {
            //     $("#tend").append(totalDollar + " Dollar(s) ")
            // }
    }

    //condition for when the change due is divisible by 3
    else if (change % twist == 0) {
        var changes = [1, .25, .10, .05, .01]
        var randChange = changes[Math.floor(Math.random() * changes.length)];
        console.log(change + "||" + randChange + "\n" + 
        "*********************************************************************************************************");
    }
}
