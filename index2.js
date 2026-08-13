// Activity 8: Reusable Machines
/**
  The program will have two functions. The first function will calculate the tip using the bill amount and tip percentage. The second function will display a formatted message showing the bill and calculated tip
 */

function calculateTip(bill, percentage) {
    let tip = bill * (percentage / 100);
    return tip;
}

function displayMessage(bill, tip) {
    console.log(`Bill: ₦${bill}`);
    console.log(`Tip: ₦${tip}`);
}

let billAmount = 10000;
let tipPercentage = 10;

let tipAmount = calculateTip(billAmount, tipPercentage);

displayMessage(billAmount, tipAmount);


