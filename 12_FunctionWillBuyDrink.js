
//***********************************************************************************************************************************
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//     and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
//***********************************************************************************************************************************


// Function to check if have have money to buy a drink
function willBuyDrink( isHotOutside, moneyInPocket ) {

    // Declare a constant limit
    const costLimit = 10.50;

    // Check if it is hot outside and have enough money
    if ( isHotOutside == true && moneyInPocket > costLimit ) {

        // Return true if it is hot outside and have enough money
        return true;
    }
    else {

        // Return false it is not hot outside or don't have enough money
        return false;
    }
    
}


// Call the function to if should buy a drink
console.log( "Will I buy a drink? = " + willBuyDrink( true, 24.99 ) );
console.log( "Will I buy a drink? = " + willBuyDrink( false, 24.99 ) );
console.log( "Will I buy a drink? = " + willBuyDrink( false, 7.95 ) );