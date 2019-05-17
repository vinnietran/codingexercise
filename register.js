
var axios = require("axios");
var fs = require("fs");
var userOption = process.argv[2];
var input = process.argv.slice(3).join(" ");

getValue();

var prices = []; 

function getValue() {
    fs.readFile("price.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataRdm = data.split(" ");
        //showSongInfo(dataRdm[1])
        //console.log(data);
       // console.log(dataRdm);
  
        prices.push(dataRdm);
        //splits it at the comma so anything before comma will be retuned
        //need to split it at the line break
        // makeChange(data); 

        for (var i = 0; i < dataRdm.length; i++){
            console.log(dataRdm[i]);
            var calculate = dataRdm[i];
            makeChange(calculate);
        }
    })

    
}

//makeChange(3.12, 7); 

function makeChange(actualPrice, pricePaid) {
    if (pricePaid > actualPrice) {
        var change = parseInt(pricePaid) - parseInt(actualPrice); 
        console.log("$" + change)
    }
}

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