
var axios = require("axios");
var fs = require("fs");
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
            console.log(change);
        }

    })


}

//makeChange(3.12, 7); 

// function makeChange(actualPrice, pricePaid) {
//     if (pricePaid > actualPrice) {
//         var change = parseInt(pricePaid) - parseInt(actualPrice); 
//         console.log("$" + change)
//     }
// }

  //how can you decide the least amount of currency to use to make the change

//   var dollar = 1;
//   var five = 5;
//   var ten = 10; 
//   var twenty = 20; 
//   var fifty = 50; 
//   var hundred = 100; 

//   var penny = .01; 
//   var nickel = .05; 
//   var dime = .10;
//   var quarter = .25;

// need to work on splitting the arguments but i think a google should solve that. 
// It is reading the file so thats good