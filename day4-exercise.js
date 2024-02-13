/*
PROBLEM 01:_____________________________________________________________________________________
Create a function that can create a triangle pattern 
according to the height we prove like the following:

    01
    02 03
    04 05 06
    07 08 09 10

Parameters : height -> triangle height
*/

const triangleHeight = 4;

function triangle(height){
    
    let num = 1   

    for (let i=0; i <= height; i++){
        let line = "";
        for (let j = 0; j <= i; j++){
            if(num<10){
                line += "0" + num + " ";
            }else{
                line += num + " ";
            }
            num++
        }
        console.log(line);
    }
    
}

triangle(triangleHeight);

/*
PROBLEM 02:_____________________________________________________________________________________
Create a function that can loop the number of times according
to the input we provide, and will replace multiples of 3 with "Fizz", 
multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz". 

Parameters : n -> total looping

    Example: n = 6 -> 1,2,Fizz,4,Buzz,Fizz
    Example: n = 15-> 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,12,13,14,FizzBuzz

*/

let n = 15;
let array = []

for (let i = 1; i <= n; i++) {
    array.push(i)
}

for (let j = 0; j < array.length; j++) {
    // console.log(j);
    if (array[j] % 3 === 0 && array[j] % 5 === 0) {
        array[j] = "FizzBuzz";
    } else if (array[j] % 5 === 0) {
        array[j] = "Buzz"
    } else if (array[j] % 3 === 0) {
        array[j] = "Fizz"
    } else {
        array[j] = array[j]
    }
}

console.log(array);

/*
PROBLEM 03:_____________________________________________________________________________________
Create a function to calculate Body Mass Index (BMI)
Formula : BMI=weight(kg)/(height(meter))**2
Parameters : weight & height
Return values :
    <18.5 return "less weight"
    18.5-24.9 return "ideal"
    25.5-29.9 return "overweight"
    30.0-39.9 return "very overweight"
    >39.9 return "obesity"

*/

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

const weight = 70; // in kilograms
const height = 1.75; // in meters

const bmiCategory = calculateBMI(weight, height);
console.log("BMI Category:", bmiCategory);


/*
PROBLEM 04:_____________________________________________________________________________________
write a function to remove all odd numbers in an array and 
return a new array that contains even numbers only
    Example :[1,2,3,4,5,6,7,8,9,10]->[246810]

*/

function removeOdd (number) {
    let result = [];
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 === 0) {
            result.push(number[i])
        } 
    }
    
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = removeOdd(numbers)
console.log(newNumbers)



/*
PROBLEM 05:_____________________________________________________________________________________
write a function to split a string and convert it into 
an array of words
    Example :"Hello World"->["Hello","World"]

*/

function splitString(word) {
    return word.split(" ")
}

const words = "Hello World";
const arrayWords = splitString(words);
console.log(arrayWords);  