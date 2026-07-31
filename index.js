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

    let itemName = prompt("what do you want to buy today?");
    let itemPrice = prompt("Price?");
    let itemQuantity = prompt("Quantity?");
    let disCount = 10; 
    let totalAmount = itemPrice * itemQuantity;
    let finalAmount = totalAmount - disCount;
    alert(
      "item Purchased = " +
      itemName +
      "\n price = " +
      itemPrice +
      "\n Quantity Purchased = " +
      itemQuantity +
       "\n  Total Amount = " +
         totalAmount +
         "\n Discount  Amount = " +
         finalAmount +
         "."
    )
    
    console.log(`item Purchased = ${itemName},
                Price = ${itemPrice},
                Quantity Purchased = ${itemQuantity},
                Total Amount = ${itemPrice * itemQuantity}
                Discount Amount = ${finalAmount}`
                
      );


