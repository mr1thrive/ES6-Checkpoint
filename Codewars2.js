/*
List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(arr) {
  return arr.filter(item => Number.isInteger(item));
}


/*
In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

003111    #             3 = 1 + 1 + 1
813372    #     8 + 1 + 3 = 3 + 7 + 2
17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
Such tickets were either eaten after being used or collected for bragging rights.

Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

*/


function luckCheck(str) {
  if (!str || typeof str !== 'string') throw new Error('Invalid input');
  if (!/^\d+$/.test(str)) throw new Error('Input must be a decimal number');

  const len = str.length;
  const half = Math.floor(len / 2);

  const left = str.slice(0, half);
  const right = str.slice(len % 2 === 0 ? half : half + 1);

  const sumDigits = s => [...s].reduce((sum, d) => sum + Number(d), 0);

  return sumDigits(left) === sumDigits(right);
}

/*

Find all possible number combos that sum to a number

Description:
Jon and Joe have received equal marks in the school examination. But, they won't reconcile in peace when equated with each other. To prove his might, Jon challenges Joe to write a program to find all possible number combos that sum to a given number. While unsure whether he would be able to accomplish this feat or not, Joe accpets the challenge. Being Joe's friend, your task is to help him out.

Task
Create a function combos, that accepts a single positive integer num (30 > num > 0) and returns an array of arrays of positive integers that sum to num.
*/


function combos(num) {
  const res = [];
  (function helper(rem, start, arr) {
    if (!rem) return res.push(arr);
    for (let i = start; i <= rem; i++) helper(rem - i, i, [...arr, i]);
  })(num, 1, []);
  return res;
}

/*
Not very secure
Description:
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore

*/
const alphanumeric = (str) => /^[a-z0-9]+$/i.test(str);



/*
Physics - Mechanics - Atwood Machines in Series
Description:
const alphanumeric = (str) => /^[a-z0-9]+$/i.test(str);
The Atwood machine consists of a weightless, frictionless pully with two masses suspended from a weightless string at each end. One of these masses can be replaced by another Atwood machine, and again, and again...

Write a function that receives a list of 2 to 100 masses (kg) and returns the acceleration (m/s/s) of the first mass.

Quick Physics Reference
If you would like to test your Mechanics skills, this is all you need:

Force = Mass x Acceleration
Gravitational Force (N) = Mass (kg) x 9.80665 (m/s/s)
Tension Force is equal for objects on two ends of the same string
Find acceleration by combining all forces on an object
In a many-mass system, multiple masses can often be reduced to one "effective" mass
Solve the two-mass system first, then replace the second mass with a pulley (recurse)

*/

function atwood(masses) {
  const g = 9.80665;
  while (masses.length > 2) {
    const m2 = masses.pop();
    const m1 = masses.pop();
    const effective = (m1 + m2 === 0) ? 0 : (4 * m1 * m2) / (m1 + m2);
    masses.push(effective);
  }
  const [m1, m2] = masses;
  return (m1 + m2 === 0) ? 0 : g * (m2 - m1) / (m1 + m2);
}

/*
Create Human Readable Time
Description:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}


/*
Create Greed is Good.js
Description:
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450

*/
function score( dice ) {
 let result=0;
 let arr2=[];
 
 const arr1=dice.sort((a,b)=>a-b)
 for (let i=1;i<7;i++)
 { 
 arr2.push(arr1.slice(arr1.indexOf(i),arr1.lastIndexOf(i)+1))
 }
 let arr=arr2.map(v=>v.length)
 for (let j=0;j<5;j++){
if(arr[0]>=3){ result+=1000;arr[0]-=3;}
if (arr[0]>0){result+=100;arr[0]-=1}
if(arr[1]>=3){ result+=200;arr[1]-=3}
if(arr[2]>=3){ result+=300;arr[2]-=3}
if(arr[3]>=3){ result+=400;arr[3]-=3}
if(arr[4]>=3){ result+=500;arr[4]-=3;}
if (arr[4]>0){result+=50;arr[4]-=1}
if(arr[5]>=3){ result+=600;arr[5]-=3}
 }
 return result
}

/*
Is my friend cheating?
Description:
A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".

It happens that there are several possible (a, b). The function returns an empty array (or an empty string) if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).

(See examples of returns for each language in "RUN SAMPLE TESTS")

Examples:
removNb(26) should return [(15, 21), (21, 15)]
or

removNb(26) should return { {15, 21}, {21, 15} }
or

removeNb(26) should return [[15, 21], [21, 15]]
or

removNb(26) should return [ {15, 21}, {21, 15} ]
or

removNb(26) should return "15 21, 21 15"
or

in C:
removNb(26) should return  **an array of pairs {{15, 21}{21, 15}}**
tested by way of strings.

*/
function removeNb (n) {
  var results = [];
  for (var a = 1; a <= n; a++) {
    var b = (n * (n + 1) / 2 - a) / (a + 1);
    if (b % 1 === 0 && b <= n) results.push([a, b]);
  }
  return results;
}


/*
Can you get the loop
Description:
You are given a node that is the beginning of a linked list. This list always contains a tail and a loop.

Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is 11.

Image and video hosting by TinyPic
// Use the `getNext' method or 'next' property to get the following node.

node.getNext()
node.next
Note: do NOT mutate the nodes!

Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !!
*/

function loop_size(node){
  var turtle = node;
  var rabbit = node;
  
  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  }
  while (turtle != rabbit);
  
  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  }
  while (turtle != rabbit);

  // voila
  return count;
}


/*
Maximum Subarray Sum
Description:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
   let sum=0;
   for (let i=0;i<arr.length;i++)
     for (let j=1;j<=arr.length;j++)
     {
     if (arr.slice(i,j).reduce((a,b)=>a+b,0)>sum){sum=arr.slice(i,j).reduce((a,b)=>a+b,0)}
     }
   return sum>0?sum:0
}

/*

Create Longest Common Subsequence
Description:
Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

Subsequence
A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

Example subsequence
Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

LCS examples
LCS( "abcdef" , "abc" ) => returns "abc"
LCS( "abcdef" , "acf" ) => returns "acf"
LCS( "132535365" , "123456789" ) => returns "12356"
Notes
Both arguments will be strings
Return value must be a string
Return an empty string if there exists no common subsequence
Both arguments will have one or more characters (in JavaScript)
All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).
*/
function LCS(x, y) {
  let str =''
  let n = 0
  for (let i=0;i<y.length;i++){
  for (let j=n;j<x.length;j++)
    if (x[j]===y[i]){
      str+=y[i]
      n=++j
      break
    }
  }
  return str
}

/*
Pick peaks

Description:
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.

For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).

The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.

Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)

All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.

The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).

Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)

Have fun!
*/

function pickPeaks(arr){
  let result = { pos: [], peaks: [] };
  for (let i = 1; i < arr.length; i++) {
    var position;
    if (arr[i] > arr[i - 1]){
      position = i;
    } else if (arr[i] < arr[i - 1] && position){
      result.pos.push(position);
      result.peaks.push(arr[position]);
      position = undefined;
    }
  }
  return result;
