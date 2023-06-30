

//******************************************************************************************************************
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// Use a loop to iterate through the array and calculate the average number of letters per name.
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
//******************************************************************************************************************


//******************************************************************************************************************
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//******************************************************************************************************************
let myNameArray = new Array( "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob" ); 
console.log ( "myNameArray = " + myNameArray );


//******************************************************************************************************************
// Use a loop to iterate through the array and calculate the average number of letters per name.
//******************************************************************************************************************

// Declare variables
let averageLetter = 0.0;
let sumLetter = 0;

// Sum of the age 
for ( let name of myNameArray ) {

    sumLetter = sumLetter + name.length;
}

// Calculate the average
averageLetter = sumLetter/myNameArray.length;

// Show the average 
console.log( " Average Letter Per Name = " + averageLetter );




//******************************************************************************************************************
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
//******************************************************************************************************************

let allNamesSeparatedBySpace = "";

// Sum of the age 
for ( let name of myNameArray ) {

    allNamesSeparatedBySpace = allNamesSeparatedBySpace + " " + name;
}

console.log( "All Names Separated by Space = " + allNamesSeparatedBySpace );
