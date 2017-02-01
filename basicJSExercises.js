/* ---------------------------

*** #1 Percentage ***

Write a JavaScript function to calculate the percentage (%) of a given number.

Test:
console.log(percentage(2000, 37.12));

Output:
742.4

 --------------------------- */
function percentage(number, percentage) {
    return number * percentage / 100;;
//  return "No code yet";
}

console.log("Percentage Calculator:");
/* Uncomment the following to check */
   console.log(percentage(2000, 37.12));
   console.log(percentage(450, 56.5));
   console.log(percentage(5230, 34));




/* ---------------------------

*** #2 Rotate String ***

Rotate a given string in the right direction by periodically removing
one letter from the end of the string and attaching it to the front.

Test:
rotateString("cat");

Output:
cat
tca
atc
cat

HINT: Use substring()
 --------------------------- */

function rotate_string(text) {

  var i, temp, str;

  console.log(text);  // the first one : cat

  for(i = 0; i < text.length; i++)
  {
    text = text[text.length-1] + text.substring(0, text.length-1);  // notice this line
    console.log(text);
  }

  console.log(text);
}

console.log("Rotate String:");
/* Uncomment the following to check */
  rotate_string("cat");
  rotate_string("voracious")

/* ---------------------------

*** #3 Remove First Occurence ***

Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.

Test:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

Output:
"The quick brown fox jumps over lazy dog"

HINT: Use indexOf() and slice()

 --------------------------- */

function remove_first_occurrence(text, searchstring) {
//  return "edited text";
    var str;

    for(var i = 0; i < text.length; i++)
    {


      //  console.log("line 91: " + text.charAt(i));
        if( text.charAt(i) == searchstring.charAt(0) && text.charAt(i + searchstring.length) == " ")  // incomplete condiiton
        {
            // remove
            str = text.slice(0, i-1) + text.slice(i+searchstring.length,  text.length);   // all before 'the'  +
        }
    }

    return str;
}

console.log("Remove First Occurrence:");
/* Uncomment the following to check */
  console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));




/* ---------------------------

*** #4 Alphabetical Order ***

Write a JavaScript function that returns a passed string with letters in alphabetical order.

Test:
console.log(alphabetic_order('webmaster'));

Output:
abeemrstw

HINT: Use join(), split() and sort() fucntions
 --------------------------- */

function alphabetic_order(word) {
  return "rearranged word";
}

console.log("Alphabetic Order:");
/* Uncomment the following to check */
  // console.log(alphabetic_order("webmaster"));




/* ---------------------------

*** #5 Most Frequent Item ***

Write a JavaScript function to find the most frequent item in a given array.

Test:
most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

Output:
a occurs 5 times

 --------------------------- */

function most_frequent(arr) {
  console.log("Most frequently occuring item in arr");
}

console.log("Most Frequent Item:");
/* Uncomment the following to check */
  // most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);




/* ---------------------------

*** #6 FizzBuzz ***

Write a JavaScript function which iterates the integers from 1 to n.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

Test:
fizzbuzz(16);

Output:
  1
  2
  3 Fizz
  4
  5 Buzz
  6 Fizz
  7
  8
  9 Fizz
  10 Buzz
  11
  12 Fizz
  13
  14
  15 FizzBuzz
  16

 --------------------------- */

function fizzbuzz(n) {
  console.log("Print the Fizz, Buzz and FizzBuzz numbers in 1 to n");
}

console.log("FizzBuzz:");
/* Uncomment the following to check */
  // fizzbuzz(100);




/* ---------------------------

*** #7 Guessing Game ***

Write a JavaScript program where the program takes a random integer between 1 to 10,
the user is then prompted to input a guess number. If the user input matches with guess number,
the program will display a message "Good Work" otherwise display a message "Not matched"

HINT: Use Math.ceil() and Math.random()

 --------------------------- */

function guessing_game(guess) {
  // Get a random integer from 1 to 10 inclusive
  console.log("matched or unmatched?");
}

console.log("Guessing Game:");
/* Uncomment the following to check */
  // var guess = prompt('Guess the number between 1 and 10 inclusive');
  // console.log("User guessed: "+ guess);
  // guessing_game(guess);
