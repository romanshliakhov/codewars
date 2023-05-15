// Ex 1. Even or Odd

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function even_or_odd(number) {
//     if (number % 2 == 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
// };



// Ex 2. Name on billboard

// You can print your name on a billboard ad. Find out how much it will cost you. Each letter has a default price of £30, but that can be different if you are given 2 parameters instead of 1.
// You can not use multiplier "*" operator.
// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a letter).

// function billboard(name, price = 30){
//   let sum = 0;
  
//   for (let i = 0; i < name.length; i++) {
//     sum += price
//   }
  
//   return sum;
// } 



// Ex 3. Convert a Number to a String!

// We need a function that can transform a number into a string.
// What ways of achieving this do you know?

// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString();
// }



// Ex 4. You Can't Code Under Pressure #1

// Code as fast as you can! You need to double the integer and return it.

// function doubleInteger(i) {
//     return i * 2;
// }



// Ex 5. Function 2 - squaring an argument

// Now you have to write a function that takes an argument and returns the square of it.

// Write the "square"-function here
// function square (i) {
//     return i * i;
// }



// Ex 6. Grasshopper - Messi goals function

// Grasshopper - Messi goals function

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid. For example: 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }



// Ex 7. Volume of a Cuboid

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {      
//         return length * width * height;
//     }
// }



// Ex 8. Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.

// function otherAngle(a, b) {
//     let c;
//     return c = 180 - (a + b);
// }



// Ex 9. Beginner Series #2 Clock

// Clock shows h hours, m minutes and s seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.
// Example:
// h = 0
// m = 1
// s = 1

// result = 61000

// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// function past(h, m, s){
//     const hours = h * 60 * 60 * 1000;
//     const minutes = m * 60 * 1000;
//     const seconds = s * 1000;
    
//     return hours + minutes + seconds;
// }



// Ex 10. Grasshopper - Debug sayHello

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
// Example output:
// Hello, Mr. Spock

// function sayHello(name) {
//     return 'Hello, ' + name;
// }



// Ex 11. Sum The Strings
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

// function sumStr(a,b) {
//     return `${+a + +b}`;
// }



// Ex 12. ES6 string addition

// It is easy to join two strings together like this string1 + string2.
// Another way to get the desired result would be with string1.concat(string2)
// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
// If one of the arguments is a number your code must coerce it into being a string.

// function joinStrings(string1, string2){
//     return `${string1} ${string2}`;
// }

