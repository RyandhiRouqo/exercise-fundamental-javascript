// PROBLEM 01:_____________________________________________________________________________________
// Write a code to convert celsius to fahrenheit

// Procedure:
// 1. Find out how to convert celsius to fahrenheit
// 	fahrenheit = (celsius x 9 / 5) + 32
// 2. Find out variables to convert celsius to fahrenheit
// 	~farhenheit
// 	~celsius
// 3. Assign the variable value of celsius
// 	~celcius = 60

// Solution:
// 1. Define and assign the variable value
const celcius = 60;

// 2. Write equations in code
const fahrenheit = (celcius*9/5) + 32;

// 4. Displays the result and Finish
console.log(fahrenheit);


// PROBLEM 02:_____________________________________________________________________________________
// Write a code to check whether the number is odd or even

const number = 2;

if(number % 2 === 1){
    console.log("odd number");
}else{
    console.log("even number");
}


// PROBLEM 03:_____________________________________________________________________________________
// Write a code to check whether the number is prime number or not


const num = 7;
let isPrime = true; // kalau hasilnya boolean penamannya di awali dengan is....

if(num > 1){
    for(let i = 2; i < num; i++){
        if(num % i ===0){
            isPrime = false;       
            break;
        }
        
    }
}else{
    isPrime = false;
}

console.log(isPrime === true ? "Is a Prime Number" : "Is Not a Prime Number");


// PROBLEM 04:_____________________________________________________________________________________
// Write a code to find the sum of the number 1 to N

const nomor = 7;
let jumlah = null;
let message = "";

for(let i = 1; i <= nomor; i++){    
    jumlah  = jumlah + i;

    message += i + (i !== nomor ? "+" : "");


}

console.log(jumlah);
console.log(message + "="+jumlah)

// PROBLEM 05:_____________________________________________________________________________________
// Write a code to find factorial of a number

const NUM = 6;
let factorial = 1;

for(let i = 1 ; i <= NUM ; i++){
    console.log(i);
    factorial = factorial*i;
}

console.log(factorial);

// PROBLEM 06:_____________________________________________________________________________________
// Write a code to print the first N fibonacci numbers
const Number = 15;
let number1 = 0;
let number2 = 1;
let nextstep;

for (let i = 1; i <= Number ; i++) {
    nextstep = number1 + number2;
    number1 = number2;
    number2 = nextstep;
}

console.log(number1);