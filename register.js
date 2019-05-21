
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
            //console.log(change);
            makeChange(change);
        }
    })
}

function makeChange(change) {
    if (change == 0.00 ) {
        console.log(change + " || " + " NO CHANGE NEEDED" +
         "\n" + "*********************************************************************************************************"); 
    }

    else if (change != 0.00){
       var cents = change * 100; // 1.68 = 168
       var totalDollar = (cents / 100) >> 0; //1   
       var remaining = change - totalDollar; // .68 
       var totalQuarter = (remaining / .25) >> 0; // 2 
       var lessQuarter = remaining - (totalQuarter * .25) //.18
       var totalDime = (lessQuarter / .10) >> 0; // 1 
       var lessDime = lessQuarter - (totalDime * .10) // .08
       var totalNickel = (lessDime / .05) >> 0; // 1
       var lessNickel  = lessDime - (totalNickel * .05) // .03
       var totalPenny = lessNickel / 1; //.03
       
       console.log(change + " || " + totalDollar + " dollar(s) " + totalQuarter + " Quarter(s) " + totalDime + " Dime(s) " + totalNickel + " Nickel(s) " + totalPenny + " Pennie(s) " + 
       "\n" + "*********************************************************************************************************"); 
    }
}
