
//************************************************************************************************************************
// 7. Write a function that takes two parameters, word and n, as arguments and 
// returns the word concatenated to itself n number of times. 
// (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
//************************************************************************************************************************


// Function to add the incoming word to the number of time
function wordCatenation( word, count ) {

    // Declare a varaible to hold the concated values  
    let returnConcatedValue = "";

    // Loop through and concatenate the word.
    for ( let i=0; i<count; i++ ) {
        returnConcatedValue = returnConcatedValue + word
    }

    // Return the value to the caller
    return returnConcatedValue;
    
}

// Call the function and display the result
console.log( wordCatenation( "Mine", 7) );
