
//************************************************************************************************************************
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
//************************************************************************************************************************


//************************************************************************************************************************
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//************************************************************************************************************************

// Create an array
let myAgeArray = new Array( 3, 9, 23, 63, 2, 8, 28, 93 );

// Show the content of the array
console.log( myAgeArray );


//************************************************************************************************************************
// Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] - ages[0] is not allowed!
//************************************************************************************************************************

// Declare variables to hold value
let differentValue = 0;
let firstElement = 0;
let lastElement = 0;

// Loop through the array
for ( let i=0; i < myAgeArray.length; i++) {

    // Store and save the first element
    if ( i == 0 ) {
        firstElement = myAgeArray[i];
    }


    // Store and save the last element
    if ( i == myAgeArray.length - 1 ) {
        lastElement = myAgeArray[myAgeArray.length - 1];
    }

}

// Calculate the different
differentValue = lastElement - firstElement;

// Show the result
console.log( "Difference = " + differentValue );


//************************************************************************************************************************
// Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// Use a loop to iterate through the array and calculate the average age.
//************************************************************************************************************************

// Add an element to the array
myAgeArray.push ( 99 );

// Declare variables
let averageAge = 0.0;
let sumAge = 0;

// Sum of the age 
for ( let age of myAgeArray ) {

    sumAge = sumAge + age;
}

// Calculate the average
averageAge = sumAge/myAgeArray.length;

// Show the average 
console.log( " Average = " + averageAge );


