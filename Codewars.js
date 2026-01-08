/*


Vowel Count

Description:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

/*


Even or Odd

Description:
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}


/*


Highest and Lowest

Description:
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

*/


function highAndLow(numbers) {
  const nums = numbers.split(' ').map(Number);
  return `${Math.max(...nums)} ${Math.min(...nums)}`;
}



/*


Multiples of 3 or 5

Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If a number is a multiple of both 3 and 5, only count it once.
*/


function solution(number) {
  if (number < 0) return 0;
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}



/*


Stop gninnipS My sdroW!


Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
*/


function spinWords(string) {
  return string
    .split(' ')
    .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
    .join(' ');
}



/*

Find The Parity Outlier



Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/


function findOutlier(integers) {
  const parity = integers.slice(0, 3).map(n => Math.abs(n) % 2);
  const majorityEven = parity.filter(p => p === 0).length >= 2;
  return integers.find(n => (Math.abs(n) % 2 === 0) !== majorityEven);
}



/*

Make a function that does arithmetic!

Description:
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)
*/


function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

/*

Convert number to reversed array of digits

Description:
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/


function digitize(n) {
  return String(n).split('').reverse().map(Number);
}


/*

Switch/Case - Bug Fixing #6


Description:
Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?*/



function evalObject(value) {
  switch (value.operation) {
    case '+': return value.a + value.b;
    case '-': return value.a - value.b;
    case '/': return value.a / value.b;
    case '*': return value.a * value.b;
    case '%': return value.a % value.b;
    case '^': return Math.pow(value.a, value.b);
    default: throw new Error('Unknown operation');
  }
}


/*

Sum of Digits / Digital Root


Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function digitalRoot(n) {
  while (n >= 10) {
    n = String(n).split('').reduce((sum, d) => sum + (+d), 0);
  }
  return n;
}

// O(1) alternative using digital root formula:
function digitalRootFast(n) {
  return n === 0 ? 0 : 1 + ((n - 1) % 9);
}

/*

Regular Ball Super Ball


Description:
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
*/


class Ball {
  constructor(type = "regular") {
    this.ballType = type;
  }
}

/*

#Make them bark

Description:


You have been hired by a dogbreeder to write a program to keep record of his dogs.

You've already made a constructor Dog, so no one has to hardcode every puppy.

The work seems to be done. It's high time to collect the payment.

..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.

You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().

Can you solve this problem, or will you let this client outsmart you for good?
*/


function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  return "Woof!";
};


/*

Add property to every object in array

Description:


Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

*/


questions.forEach(question => {
  question.usersAnswer = null;
});


/*
Find the capitals
Description:
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
*/


function capitals(word) {
  return word
    .split('')
    .map((char, index) => char === char.toUpperCase() ? index : -1)
    .filter(index => index !== -1);
}

/*
Isograms
Description:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/


function isIsogram(str) {
  str = str.toLowerCase();
  return new Set(str).size === str.length;
}


/*
Is this a triangle?

Description:
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/


function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}


/*

Find the next perfect square!
Description:
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
*/


function findNextSquare(sq) {
  const root = Math.sqrt(sq);
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2);
  }
  return -1;
}

/*
Credit Card Mask

Description:
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

*/


function maskify(cc) {
  return cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4);
}

/*

Sum of odd numbers

Description:
Given the triangle of consecutive odd numbers:Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --&gt; Output)

*/


function rowSumOddNumbers(n) {
  return n * n * n;
}

/*
Find the divisors!
Description:
Create a function named divisors/Divisors that takes an integer n &gt; 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result&lt;Vec&lt;u32&gt;, String&gt; in Rust).

*/

function divisors(integer) {
  const result = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }
  return result.length ? result : `${integer} is prime`;
}

/*
Return Negative

description:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

*/


function makeNegative(num) {
  return num > 0 ? -num : num;
}

/*

String ends with?

Description:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
*/


function solution(str, ending) {
  return str.endsWith(ending);
}

/*

Do I get a bonus?

Description:
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with £ (= "\u00A3", JS, Go, Java, Scala, and Julia), $ (C, C++, C#, Dart, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or ¥ (Rust).
*/


function bonusTime(salary, bonus) {
  return '£' + (bonus ? salary * 10 : salary);
}
``
/*
Sentence Smash
Description:
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/


function smash(words) {
  return words.join(' ');
}

/*
If you can't sleep, just count sheep!!
Description:
Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/


function countSheep(num) {
  let str = '';
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
}


/*
Double Char
Description:
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

*/

function doubleChar(str) {
  return str.split('').map(char => char + char).join('');
}

/*
Sum of numbers from 0 to N
Description:
We want to generate a function that computes the series starting from 0 and ending until the given number.
*/


class SequenceSum {
  static showSequence(n) {
    if (n === 0) return "0=0";
    if (n < 0) return `${n}<0`;
    let sequence = Array.from({ length: n + 1 }, (_, i) => i).join('+');
    let sum = (n * (n + 1)) / 2;
    return `${sequence} = ${sum}`;
  }
}

/*
Who likes it?

Description:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
*/

function likes(names) {
  const count = names.length;
  switch (count) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
  }
}

/*
Plural
Description:
We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
*/


function plural(n) {
  return n !== 1;
}

/*
Leonardo Dicaprio and Oscars

Description:
You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!"
*/


function leo(oscar) {
  if (oscar === 88) return "Leo finally won the oscar! Leo is happy";
  if (oscar === 86) return "Not even for Wolf of wallstreet?!";
  if (oscar < 88) return "When will you give Leo an Oscar?";
  return "Leo got one already!";
}


/*
Grasshopper - Summation

Description:Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
*/

function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}


/*
Jenny's secret message
Description:
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
*/


function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  }
  return `Hello, ${name}!`;
}

/*
Are You Playing Banjo?
Description:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
*/


function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() === 'r' 
    ? `${name} plays banjo` 
    : `${name} does not play banjo`;
}

/*
FIXME: Get Full Name
Description:
The code provided is supposed return a person's Full Name given their first and last names.

But it's not working properly.

Notes
The first and/or last names are never null, but may be empty.

Task
Fix the bug so we can all go home early.
*/

class Dinglemouse {
 constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}


/*
A Needle in the Haystack

Description:
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:
*/


function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

/*
Sum of the first nth term of Series

Description:
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

You will need to figure out the rule of the series to complete this.

Rules
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return "0.00".

You will only be given Natural Numbers as arguments.
*/

function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}

