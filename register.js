var fs = require("fs");

//calling the getvalue function which also calls the makeChange function
getValue();

//function to read the values in the price.txt file
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

            //calling the make change function for each value pair in the arracy from the file to compute the change 
            makeChange(change);
        }
    })
}

function makeChange(change) {
    //creating variable for the 'twist the customer asked for so that it can be easily changed if needed
    var twist = 3;

    //change will not be needed if the buyer pays the exact amount 
    if (change == 0.00) {

        //logging the result to the console 
        console.log(change + " || " + " NO CHANGE NEEDED" +
            "\n" + "*********************************************************************************************************");
    }

    //condition for when the change due is not divisible by 3 
    else if (change % twist != 0) {
        notTwist(change);
    }

    //condition for when the change due is divisible by 3
    else if (change % twist == 0) {
        execute(change);
    }
}

//function to be called by if statement when change is not divisible by 3 or the client 'twist'
function notTwist(change) {

    var cents = change * 100;
    var totalDollar = (cents / 100) >> 0;
    var remaining = change - totalDollar; 
    var totalQuarter = (remaining / .25) >> 0;
    var lessQuarter = remaining - (totalQuarter * .25);
    var totalDime = (lessQuarter / .10) >> 0;
    var lessDime = lessQuarter - (totalDime * .10);
    var totalNickel = (lessDime / .05) >> 0; 
    var lessNickel = lessDime - (totalNickel * .05);
    var totalPenny = (lessNickel / .01).toFixed(0); 

    //logging the result to the console 
    console.log(change + " || " + totalDollar + " dollar(s) " + totalQuarter + " Quarter(s) " + totalDime + " Dime(s) "
        + totalNickel + " Nickel(s) " + totalPenny + " Pennie(s) " +
        "\n" + "*********************************************************************************************************");
}

// The below code block is how I worked around not being able to figure out how to efficiently randomize the change that is generated when the change is 
//divisible by 3. I very much understand that this is not the most efficient way to do things, and does not even entirely solve the client request
//None the less, execute() will nonetheless generate a random function call that will either make the change in all dollars, quarters, etc. 

function execute(change) {
    var i = random();
    eval('rand' + i + '(change)');
}
function random() {
    var i = Math.floor(Math.random() * 20) % 6;
    if (i <= 0) return random();
    return i;
}

//function for making change in quarters
function rand1(change) {
    var totalQuarter = (change / .25) >> 0;
    //logging the result to the console 
    console.log(change + " || " + totalQuarter + " Quarter(s) " +
        "\n" + "*********************************************************************************************************");
}

//function for making change in nickels 
function rand2(change) {
    var totalNickel = (change / .05) >> 0;
    //logging the result to the console 
    console.log(change + " || " + totalNickel + " Nickel(s) " +
        "\n" + "*********************************************************************************************************");
}

//function for making change in dimes 
function rand3(change) {
    var totalDime = (change / .10) >> 0;
    //logging the result to the console 
    console.log(change + " || " + totalDime + " Dime(s) " +
        "\n" + "*********************************************************************************************************");
}

//function for making change in pennies 
function rand4(change) {
    var totalPennie = (change / .01) >> 0;
    //logging the result to the console 
    console.log(change + " || " + totalPennie + " Pennie(s) " +
        "\n" + "*********************************************************************************************************");
}

//function for making change in dollars
function rand5(change) {
    var totalDollar = (change / 1) >> 0;
    //logging the result to the console 
    console.log(change + " || " + totalDollar + " Dollar(s) " +
        "\n" + "*********************************************************************************************************");
}