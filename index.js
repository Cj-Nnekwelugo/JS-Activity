// Activity 1: Part 4: Collaborative Technical Challenge


/**
 *  Firstly,this program needs to know the current age and the name of any user then use the name and age subtract it by the current year, 
 */


    
/*
    let userName = prompt("Enter your name?");
    let age = prompt("what is your age?");
    let favoriteHobby = prompt("what is your favorite hobby?");
    let birthyear = 2026 - age;
    alert(
      "Welcome "+
      userName +
      " \n you are "+
      age +
      "years old "+
      " \n you are born in "+
      birthyear  +
      "." +
      "\n your favorite hubby is " +
      favoriteHobby +
      "."

    );
    
    console.log(
      `welcome ${userName}. you are ${age} years old. you were born in ${birthyear}. your favorite hobby is ${favoriteHobby}.`
    );
    
    */


    //Activity 2:  Part 4: Collaborative Technical Challenge

    /**
     * Firsty i will request the user item name he/she wants to purchase then ask the price then also ask the quantity the person needs 
     */

    /*
    let itemName = prompt("what do you want to buy today?");
    let itemPrice = prompt("Price?");
    let itemQuantity = prompt("Quantity?");
    let disCount = 10; 
    let totalAmount = itemPrice * itemQuantity;
    let finalAmount = totalAmount - disCount;
    alert(`item Purchased=   ${ itemName} \n price= ${itemPrice} \n Quantity Purchased= ${itemQuantity} \n  Total Amount= ${totalAmount}  \n Discount  Amount = ${finalAmount}`);
     
    console.log(`item Purchased = ${itemName},
                Price = ${itemPrice},
                Quantity Purchased = ${itemQuantity},
                Total Amount = ${itemPrice * itemQuantity}
                Discount Amount = ${finalAmount}`
                
      );*/
      



  //Activity 3:  Part 4: Collaborative Technical Challenge
  /**
   * First of all i will create a prompt userName input that asks users to iput there name and age, then create a console.log that conbines the userName first name with the number.
   */
  // Ask the user for input
/*
let firstName = prompt("what is your first-name:");
firstName = firstName.trim();

let favoriteNumber = Number(prompt("what is your favorite number:"));

if (firstName.length > 8) {
    firstName = firstName.slice(0, 8);
};

let convertion = firstName.toLowerCase();

let userName = `${convertion}${favoriteNumber}`;

alert(`your Username is: ${userName}`);

console.log(`your Username is: ${userName}`);*/



// Activity 4: Text and Numbers Part 4: Collaborative Technical Challenge
/**
 * this program needs the students name, and the student  numeric score then converts the user name to uppercase and the user numeric score to rounded number and then display the student name and the rounded score.
 */
/*
let studentName = prompt("student name: ");

let studentScore = Number(prompt("student score: "));

let upperName = studentName.toUpperCase();
let roundedScore = Math.round(studentScore);


alert(` Name: ${upperName}.  \n Your rounded Score is: ${roundedScore}`);

console.log( `  Name: ${upperName}. \n Your rounded Score is: ${roundedScore}`);
*/





// Activity 5: Decision Makers  Part 4: Collaborative Technical Challenge

/**
 * 
 */

let age = Number(prompt("what is your age:"));
let day = prompt("is today weekdays or weekends?");
let price;

 if (age < 17 ) {
    price = 1200;
 } 
 else if (age >= 18 && age <= 70 ){
    price = 3000;
 } 

 if (day === "weekdays"){
    price = 4000;
 }
  else if (day === "weekends"){
    price = 3000;
 }
 else{
    price = 1200;
 };

 alert(`Movie Ticket 
     age: ${age} 
     day: ${day} 
     price= ${price}`);

 console.log(`price: ${price}`);

 