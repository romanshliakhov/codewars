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



// Ex 13. Is he gonna survive?

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// function hero(bullets, dragons){ 
//     return bullets >= dragons * 2 ;
// }



// Ex 14. Determine offspring sex based on genes XX and XY chromosomes

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

// function chromosomeCheck(sperm) {
//     if ( sperm === 'XY') {
//         return "Congratulations! You're going to have a son.";
//     } else {
//         return "Congratulations! You're going to have a daughter.";
//     }
// }



// Ex 15. Grasshopper - Check for factor

// This function should test if the factor is a factor of base.
// Return true if it is a factor or false if it is not.

// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.

// function checkForFactor (base, factor) {
//     if ( base % factor === 0 ) {
//       return true;
//     } else if ( base % factor ) {
//       return false;
//     }
// }



// Ex 16. Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// function opposite(number) {
//     return -number;
// }


// Ex 17. Return Negative

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     return num > 0 ? -num : num;
// }



// Ex 18. Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {  
//     const index = weight / height ** 2;
    
//     if ( index <= 18.5) {
//       return "Underweight";
//     } else if ( index <= 25.0) {
//       return  "Normal";
//     } else if ( index <= 30.0) {
//       return "Overweight";
//     } else if ( index > 30) {
//       return "Obese";
//     }
// }



// Ex 19. Quadrants 

// Task
// Given a point in a Euclidean plane (x and y), return the quadrant the point exists in: 1, 2, 3 or 4 (integer). x and y are non-zero integers, therefore the given point never lies on the axes.

// Examples
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

// function quadrant(x, y) {
//     if ( x > 0 && y > 0 ) {
//       return 1;
//     } else if ( x < 0 && y > 0) {
//       return 2;
//     } else if ( x < 0 && y < 0) {
//       return 3;
//     } else {
//      return 4;
//     }
// }


// Ex 20. Thinkful - Logic Drills: Traffic light

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  
    //your code here!
  
}