
//***********************************************************************************************************************************
// 11. Write a function that takes two arrays of numbers and returns true 
//     if the average of the elements in the first array is greater than the average of the elements in the second array.
//***********************************************************************************************************************************


// Function to return a fullname
function averageAllElements( numberArray ) {

    // Declare a variables to hold the sum and average
    let sumOfNumber = 0;
    let averageOfNumber = 0.0;

    // Sum of all values in the array
    for ( let i=0; i<numberArray.length; i++ ) {
        sumOfNumber = sumOfNumber + numberArray[i];
    }

    // Calculate the average for all elements
    averageOfNumber = sumOfNumber/numberArray.length; 

    // Return the average of all elements
    return averageOfNumber;
    
}


function compareArrayAverage( firstArray, secondArray  ) {

    let firstArrayAverage = 0.0;
    let secondArrayAverage = 0.0;  

    console.log( "First Array = " + firstArray );
    console.log( "Second Array = " + secondArray );

    // Call a function to get an average for the numbers in the Array
    firstArrayAverage = averageAllElements( firstArray );

    // Call a function to get an average for the numbers in the array
    secondArrayAverage = averageAllElements( secondArray );

    console.log( "Average First Array = " + firstArrayAverage );
    console.log( "Average Second Array = " + secondArrayAverage );

    // Check if the average for the first array is greater than the second array
    if ( firstArrayAverage > secondArrayAverage ) {
        
        // Average of the first array is greater, return true.
        return true;
    } else {
        
        // Average of the second array is greater, return false.
        return false;
    }

}


// Declare an array with high values
let numberArrayHigh = new Array ( 50, 50, 60, 80  );

// Declare an array with low values
let numberArrayLow = new Array ( 1, 2, 3, 4, 5 );

// Call the function and display the result
console.log( "Is the average of the first array of numbers greater than the second array of numbers? = " + compareArrayAverage( numberArrayHigh, numberArrayLow ) );

// Call the function and display the result
console.log( "Is the average of the first array of numbers greater than the second array of numbers? = " + compareArrayAverage( numberArrayLow, numberArrayHigh ) );

