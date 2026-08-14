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




// Activity 9: Functions Expressions and Arrow Functions
/**
 The program needs three small helper functions. One converts a percentage into a decimal, another calculates the area of a rectangle, and the third converts Celsius temperature into Fahrenheit.
 */

/*
const percentageToDecimal = (percentage) => percentage / 100;


const rectangleArea = (length, width) => length * width;


const celsiusToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;


console.log(percentageToDecimal(50));

console.log(rectangleArea(10, 5));

console.log(celsiusToFahrenheit(25)); */



// Activity 10: Build-a-Program Challenge

/**
  i will collect the item name, price, and quantity of what ever the user buys
 */

  let itemPurchsed = prompt("item Name:")
    let price = Number(prompt("Enter the price:"));
  let quantity = Number(prompt("Enter the Quantity:"));
  let subTotal = price * quantity;
  alert(` item Name: ${itemPurchsed}  price: ${price} Quantity ${quantity}  Total amount ${subTotal}`);
  console.log(`${itemPurchsed} ${price} ${quantity} ${subTotal}`);
