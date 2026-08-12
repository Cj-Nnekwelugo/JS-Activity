


function calculateTip(bill, percentage) {
    let tip = bill * (percentage / 100);
    return tip;
}

function displayMessage(bill, tip) {
    console.log(`Bill: ₦${bill}`);
    console.log(`Tip: ₦${tip}`);
}

// Test values
let billAmount = 10000;
let tipPercentage = 10;

let tipAmount = calculateTip(billAmount, tipPercentage);

displayMessage(billAmount, tipAmount);
