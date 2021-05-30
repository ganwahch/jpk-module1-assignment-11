/*
// Q no-1:  Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var array=[
//     []
// ]
// Q no-2: Declare and initialize a multidimensional array
// representing the following matrix:
let array = [
    [0,1,2,0 ],
    [1,0,1,2],
    [2,1,0,1],
   
];
document.write(array);
// Q no-3:Write a program to print numeric counting from 1 to 10.
for (var input = 1; input <= 10; input++) {
 console.log(input);
}
//  Q no-4: Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user
const number = parseInt(prompt('Enter table number: '));
const length = parseInt(prompt('Enter table length: '));

for(let i = 1; i <= length; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
// Q no-5: Write a program to print items of the following array
// using for loop:
// fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]
debugger
let fruits = ["apple","banana","mango","orane","strawberry"];
for (let a in fruits) {
    console.log("Element at Index is "+a+" is "+fruits[a]);
     
}
// Q no-6: Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<br> Counting <br>");
for (let index = 1; index <= 15; index++){
    document.write(index+" ");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br> Reverse Counting <br>");
for (let index = 10; index>=1; index--){
    document.write(index+" ");
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<br> Even <br>");
for (let index = 0; index <= 20; index++){
    // % => reminder
    if( (index%2) === 0 )    document.write(index+" ");

}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<br> Odd <br>");
for (let index = 0; index <= 20; index++){
    // % => reminder
    if( (index%2) === 1 )    document.write(index+" ");

}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<br> Seris <br>");
for (let index = 0; index <= 20; index++){
    // % => reminder
    if( (index%2) === 0 )    document.write(index+"k ");

}
// Q no-7:You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
debugger
prompt("Enter Value Here");
var fruStr = ("cake","apple pie","cookie","chips","patties");
console.log(prompt);
// Q no-8: Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var arrayNum = [24, 53, 78, 91, 12];
var largest= 0;

for (i=0; i<=largest;i++){
    if (arrayNum[i]>largest) {
        largest=arrayNum[i];
    }
}




console.log(largest);

// Q no 9-: Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
var numbers = [2, 4, 9, 2, 0, 16, 24];

var sorted = numbers.slice().sort(function(a, b) {
  return a - b;
});

var smallest = sorted[1],                      
    secondSmallest = sorted[100],                
    secondLargest = sorted[sorted.length - 2], 
    largest  = sorted[sorted.length - 1];

console.log('Smallest: ' + smallest);
console.log('Second Smallest: ' + secondSmallest);
console.log('Second Largest: ' + secondLargest);
console.log('Largest: ' + largest);
// Q no-10:Write a program to print multiples of 5 ranging 1 to
// 100.
var items = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(items[0][0]); 
console.log(items[0][1]); 
console.log(items[1][0]); 
console.log(items[1][1]); 
console.log(items);

// Q no-11: Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
function Person(){

}

Person.prototype.fname=function(){
  return "Ghanwa"
}

Person.prototype.lname=function(){
  return "Khan"
}

Person.prototype.fullname=function(){
  return this.fname() + this.lname()
}

var p = new Person();

console.log(p.fullname());
// Q no-12:Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browse

var phone="111";// prompt("Please enter your user input here");

if (phone != null) {
  document.getElementById("demo").innerHTML += "Hello " + phone + "My favourite phone is Sumsung Galaxy S6 Edge Plus length of string:28";
}
// Q no-13:  Write a program to find the index of letter "n" in the word
// "Pakistani" and display the result in your browser
var str = "pakistani!";
var pos = str.indexOf("n");
alert(str,pos);
// Q no-14:Write a program to find the last index of letter "l" in the
// word "Hello World" and display the result in your browser.
var a ="Hello World";
document.write(a);
// Q no -15:Write a program to find the character at 3rd index in the
// word "Pakistani" and display the result in your browser.
var id = "pakistani_";
var lastThird = id.substr(id.length - 3); 
var lastChar = id.substr(id.length - 1);
lastThird+lastChar;
var lastThird=lastChar;
alert(lastThird+lastChar);
// Q no -16:6. Repeat Q1 using string concat() method.
var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
var res = str1.concat(str1, str3);
// Q no-17: Write a program to replace the "Hyder" to "Islam" in the
// word "Hyderabad" and display the result in your browser.
var strCity1 = ["hyder","Islam"]
var resCity2 = str.replace(/Hyderabad/i, "Islamabad");
strCity1+strCity2
document.write(strCity1+strCity2);
//  Q no-18:  Write a program to replace all occurrences of "and" in the
//  string with "&" and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and
// football together.";
let massage = "Ali and Sami are best friends. ".replaceAll("&", "they play cricket and football together");
console.log(massage);
// Q no-19: Write a program that converts a string "472" to a number
// 472. Display the values & types in your browser.
var ids = [378, 472],
    target = `(${ids.map(v => type.stringify(v.toString())).join(', ')})`;

console.log( target);
// Q no-20: Write a program that takes user input. Convert and
// show the input in capital letters
var char ="hello world";
var allChar=char.slice(0,11);
console.log(char);
console.log(allChar);
char=char.toLocaleUpperCase();
var fullchar=allChar+char;
console.log(fullchar);
// Q no-21Write a program that takes user input. Convert and
// show the input in title case.
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 titleCase("hello world");
//  Q no- 22: Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display 3536 display in your browser
const num = 35.36;
const without = num.toString().replace(".", "");
// Q no-23:Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

*/

var username = prompt("enter user name");
var format = /[!@.,!]/;

if(format.test(username)){
    alert("Invalid Username : "+username)
}else{
    alert("Valid Username : "+username)
}
// Q no-24: . You have an array
// A = [cake, apple pie cookie chips, patties]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
    if (a <= items) {
        alert (a + " is available in our bakery")
    } else {
        alert (a + " is not available in our bakery")
    }
    // Q no-25:Write a program to take password as an input from
    // user. The password must qualify these requirements:
    // a. It should contain alphabets and numbers
    // b. It should not start with a number
    // c. It must at least 6 characters long
    // If the password does not meet above requirements,
    // prompt the user to enter a valid password.
    // For character codes of a-z, A-Z & 0-9, refer to ASCII
    // table at the end of this document.
    function printAlphabets(option){
        	var i = 65;
        	var j = 91;

        	if(option == 'small'){
        		i = 97;
        		j = 123; 
        	}
         
        	for(k = i; k < j; k++){
        		var str =String.fromCharCode(k);
                        console.log(str);
        	}
         
        }
        var a=printAlphabets('small');
        console.log(a);
        
        console.log(String.fromCharCode(65));
        
// Q no-26:Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university="University of Karachi";
var a=university.split("");
for(i=0;i<a.length;i++)
console.log(a[i]);

var m = "Hello World";  
var k = m.split(' ');  
for(i=0;i<k.length;i++)  
   console.log(k[i]);

//    Q no-27:Write a program to display the last character of a user
//    input.
var a="Pakistan"
var b=a.slice(-1);
console.log(b);

// Q no -28: You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var str="The quick brown fox jumps over the lazy dog"
document.write(str+"<br/>")
str =(str.match(/the/gi)).length
document.write(str)















