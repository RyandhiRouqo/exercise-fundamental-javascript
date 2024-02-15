// PROBLEM 01:_____________________________________________________________________________________
// Write a code to display the multiplication table of a given integer
// Example:Number -> 9
// Output:
// ~9 x 1
// ~9 x 2
// ~...
// ~9 x 10

const input = 9;
const limit = 10;

for (let i = 1; i <= limit; i++) {
console.log(`${input} * ${i} = ${input * i}`);
}

// PROBLEM 02:_____________________________________________________________________________________
// Write a code to check whether a string is a palindrome or not
// Example: "madam"->palindrome

const palindrome = "titit"

let isPalindrome = true;

let j = palindrome.length - 1;

for (let i = 0; i < palindrome.length / 2; i++){
      
    if (palindrome[i] != palindrome[j]){
        isPalindrome = false;
        break;
    }   
    j--;
}

console.log(isPalindrome === true ? "Palindrome" : "Is Not a Palindrome");


// PROBLEM 03:_____________________________________________________________________________________
// Write a code to convert centimeter to kilometer
// Example: 100000->"1 km"

const centimeter = 100000;

let kilometer = centimeter/100000;

console.log(`${centimeter} -> "${kilometer} km"`);


// PROBLEM 04:_____________________________________________________________________________________
// Write a code to format number as currency (IDR)
// Example: 1000->"Rp. 1.000,00"

const idr = 1000
const convert = new Intl.NumberFormat("id-ID",{style:'currency',currency:'IDR'}).format(idr)
console.log(convert);


// PROBLEM 05:_____________________________________________________________________________________
// Write a code to remove the first occurrence of given "search string" from a sting
// Example: string = "hello world", search string ="ell"->"ho world"

let originalString = "Hello World";
const searchString = "ell";
const index = originalString.indexOf(searchString);
let result = "";
if (index !== -1) {
  result = originalString.slice(0, index) + originalString.slice(index + searchString.length);
}

console.log(originalString);
console.log(result);
console.log(`"` + originalString + `"` + ", search string = " + `"` + searchString + `"` + " -> " + `"` + result + `"`);

// PROBLEM 06:_____________________________________________________________________________________
// Write a code to capitalize the first letter or each word in a string
// Example: "hello world"->"Hello World"

let string = "hello world";
let words = string.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

let capitalizedString = words.join(" ");
console.log(capitalizedString);


// PROBLEM 07:_____________________________________________________________________________________
// Write a code to reverse a string
// Example: "hello"->"olleh"

let stringinput = "hello";
let newString = "";
for (let i = stringinput.length - 1; i >= 0; i--) {
  newString += stringinput[i];
}

console.log(newString);


// PROBLEM 08:_____________________________________________________________________________________
// Write a code to swap the case of each character from string
// Example: "The QuiCk BrOwN Fox"->"tHE qUIcK bRoWn fOX"

const str = 'The QuiCk BrOwN Fox';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
let hasil = [];

for (let i = 0; i < str.length; i++) {
  if(UPPER.indexOf(str[i]) !== -1) {
    hasil.push(str[i].toLowerCase());
  } else if(LOWER.indexOf(str[i] !== -1)) {
    hasil.push(str[i].toUpperCase());
  } else {
    hasil.push(str[i]);
  }
}
console.log(hasil.join(''));


// PROBLEM 09:_____________________________________________________________________________________
// Write a code to find the largest of two given integers
// Example: num1 = 42, num2 = 27 -> 42

const number1 = 30;
const number2 = 27;

console.log(number1>number2?number1:number2)


// PROBLEM 10:_____________________________________________________________________________________
// Write a conditional statement to sort three numbers
// Example: num1 = 42, num2 = 27, num3 = 18 -> 18,27,42

let num1 = 42;
let num2 = 27;
let num3 = 18;

if (num1 > num2) {
  let sort = num1;
  num1 = num2;
  num2 = sort;
}

if (num1 > num3) {
  let sort = num1;
  num1 = num3;
  num3 = sort;
}

if (num2 > num3) {
  let sort = num2;
  num2 = num3;
  num3 = sort;
}

console.log(num1 + ', ' + num2 + ', ' + num3);
    




// PROBLEM 11:_____________________________________________________________________________________
// Write a code that shows 1 if the input is a string, 2 if the input in a number, and 3 for other data type.
// Example: "hello"->1

let masukan = "hello";
let keluaran = "";

if (typeof masukan === "string") {
  keluaran = 1;
} else if (typeof keluaran === "number") {
  keluaran = 2;
} else {
  keluaran = 3;
}

console.log(keluaran);
console.log(masukan + " -> " + keluaran);


// PROBLEM 12:_____________________________________________________________________________________
// Write a code to change every letter a into * from a sting of input
// Example: "An apple a day keeps the doctor away"-> "*n *pple * d*y keeps the doctor *w*y"

const kata = "An apple a day keeps the doctor away";
const modifiedStr = "*";
let output = "";

for (let i = 0; i < kata.length; i++){
  if (kata[i] === 'a' || kata[i] === "A") {
    output += modifiedStr; 
  } else {
    output += kata[i];
  }
}

console.log(output);



