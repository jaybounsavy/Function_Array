
//********************************************************************************************************************************
// Create a new array called nameLengths. 
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
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


console.log( "nameLengthsArray = " + nameLengthsArray );
