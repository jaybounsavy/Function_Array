
//***********************************************************************************************************************************
// 13. Write a function to calculate retaurant tip passing the tip percent as a whole number and cost as decimal
//***********************************************************************************************************************************

// Function that calculates the tip
function calcuateTip( percent, cost ) {

    // Declare a variable to hold the tip 
    let tipAmount = 0.0;

    // Calculate the tip
    tipAmount = (percent/100) * cost;

    // Return the tip
    return tipAmount;

}


// Call a function and display the tip amount
console.log( "How is my tip? = " + calcuateTip( 10, 75.80 ));
console.log( "How is my tip? = " + calcuateTip( 15, 75.80 ));
console.log( "How is my tip? = " + calcuateTip( 18, 75.80 ));
console.log( "How is my tip? = " + calcuateTip( 20, 75.80 ));