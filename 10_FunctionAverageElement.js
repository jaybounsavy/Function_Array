
//***********************************************************************************************************************************
// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
//***********************************************************************************************************************************


// Function to return a fullname
function averageAllElements( numberArray ) {

    // Declare a variables to hold the sum and average
    let sumOfNumber = 0;
    let averageOfNumber = 0.0;

    // Sum of all values in the array
    for ( let number of numberArray ) {
        sumOfNumber = sumOfNumber + number;
    }

    // Calculate the average for all elements
    averageOfNumber = sumOfNumber/numberArray.length; 

    // Return the average of all elements
    return averageOfNumber;
    
}

// Declare an array with high values
let numberArrayHigh = new Array ( 50, 50, 60, 80  );

// Call the function and display the result
console.log( "Average of all elements is = " + averageAllElements( numberArrayHigh ) );

