// Task number X :
// Create a function, which checks numbers in a string.
// If include 0-9 (0123456789) independently of the others words, return TRUE.
// If some string not include numbers from above scope of numbers, return FALSE.
// We will use Sum Rule of Big-O notation to explain that problem.
// So let's go to work...

const myExample = (someWords) => {
  let numContainer = {};

  for(let i=0; i<someWords.length; i++){
    if(!isNaN(parseInt(someWords[i]))){
      numContainer[someWords[i]] = true;
    };
  };

  for(let i=0; i<10; i++){
    if(!numContainer[i]) return false;
  };

  return true;

};

let goodEx = myExample(`abc0123456789`); // TRUE
let wrongEx = myExample(`4231dff`); // FALSE
