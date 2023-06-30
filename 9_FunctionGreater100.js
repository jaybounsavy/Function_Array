
//***********************************************************************************************************************************
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
//***********************************************************************************************************************************


// Function to return a fullname
function greaterThanHundred( numberArray ) {

    // Declare a variable to hold the sum
    let sumOfNumber = 0;

    // Sum of all values in the array
    for ( let number of numberArray ) {
        sumOfNumber = sumOfNumber + number;
    }

    // Check if the sum is greater than 100
    if ( sumOfNumber > 100 ) {

        // Return true if it is greater 100
        return true;
    }
    else {

        // Return false if it is less than or equal to 100
        return false;
    }
    
}

// Declare an array with high values
let numberArrayHigh = new Array ( 50, 50, 60, 80  );

// Call the function and display the result
console.log( "Is the number greater than 100? = " + greaterThanHundred( numberArrayHigh ) );


// Declare an array with low values
let numberArrayLow = new Array ( 1, 2, 3, 4, 5 );

// Call the function and display the result
console.log( "Is the number greater than 100? = " + greaterThanHundred( numberArrayLow ) );