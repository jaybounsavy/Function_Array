
//********************************************************************************************************************************
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
//********************************************************************************************************************************

// Create an Array of Names
let myNameArray = new Array( "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob" ); 
console.log ( "myNameArray = " + myNameArray );

// Creat an empty to hold the name length
let nameLengthsArray = [];

// Loop through the array
for ( let i=0; i < myNameArray.length; i++) {

    nameLengthsArray.push( myNameArray[i].length )

}

//Display the array of lenghts
console.log( "nameLengthsArray = " + nameLengthsArray );


//**************************************************************************
// Sum all elements of the array
//**************************************************************************

let sumAllElement = 0;

// Sum all the elements of the array
for ( let length of nameLengthsArray ) {

    sumAllElement = sumAllElement + length;
}

// Display the sum
console.log( "Sum of all elements = " + sumAllElement );
