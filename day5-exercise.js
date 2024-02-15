/*
PROBLEM 01:_____________________________________________________________________________________
Write a function to get the lowest, highest and average value
in the array (with and without sort function).
a. Example : arr=[12,5,23,18,4,45,32]->(lowest : 4, highest :45, average: 19.8xxx)

*/
// WITH SORT FUNCTION

function theArray1 (array){
    let lowest = Math.min(...array)
    console.log(lowest);
    let highest = Math.max(...array);
    console.log(highest)
    let average = array.reduce((a,b)=>a+b,0)/array.length;
    console.log(average)
    return `(lowest : ${lowest}, highest : ${highest}, average : ${average})`
}

const arr = [12,5,23,18,4,45,32];
console.log(theArray1(arr));

// WITHOUT SORT FINCTION

function theArray2 (array){
    let min = array[1];
    for(i=0;i<array.length;i++){
        if(array[i]<=min){
            min = array[i];
        }else{
            min = min;
        }
    }
    console.log(min);

    let max = array[1];
    for(i=0;i<array.length;i++){
        if(array[i]>=max){
            max = array[i];
        }else{
            max = max;
        }
    }
    console.log(max);

    let sum = null;
    for(i=0;i<array.length;i++){
        sum += array[i];
    }
    let average = sum/array.length;
    console.log(sum);
    console.log(average);
    return `(lowest : ${min}, highest : ${max}, average : ${average})`
}

console.log(theArray2(arr));


/*
PROBLEM 02:_____________________________________________________________________________________
Write a function that takes an array of words and 
returns a string by concetenating the words in the array,
separated by commas and -the last word-by an 'and'.
a. Example : arr=["apple,"banana","cherry","date"]->"apple,banana,cherry,and date"

*/

function theWords (array){
    let words="";
    for(i=0;i<array.length;i++){
        if(i===array.length-1){
            words += ", and "+ array[i];
        }else if(i===0){
            words += array[i];
        }else{
            words += ", " + array[i];
        }
        

    }
    return words;
}

let arr2 = ["apple","banana","cherry","date"];

console.log(theWords(arr2));

/*
PROBLEM 03:_____________________________________________________________________________________
Write a function to split a string and convert it into
an array of words.
a. Example : "Hello World" -> ["Hello","World"]

*/

function splitWords (words){
    array=[];
    arraywords =  words.split(" ");
    array=arraywords;
    return array;
}

const words = "Hello World";

console.log(splitWords(words));

/*
PROBLEM 04:_____________________________________________________________________________________
Write a function to calculate each element in 
the same position from two arrays of integer.
Assume both arrays are of the same length.
a. Example : [1,2,3]+[3,2,1]->[4,4,4]

*/

function sumofarray(arr1,arr2){
    const result=[];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (i=0;i<maxLength;i++){
        const sum = (arr1[i]||0)+(arr2[i]||0)
        result.push(sum)
    }
    return result
}

const arrayA = [1,2,3,4];
const arrayB = [3,2,1];

console.log(sumofarray(arrayA,arrayB))

/*
PROBLEM 05:_____________________________________________________________________________________
Write a function that adds an element to the end of an array. 
However, the element should only be added if it is not 
already in the array
a. Example : arr=[1,2,3,4], newElement = 4 -> [1,2,3,4]
b. Example : arr=[1,2,3,4], newElement = 7 -> [1,2,3,4,7]

*/

function addArray (array,element){
    let isArray = false;
    
    for (i = 0; i < array.length ; i++){
        if(array[i] === element ){
            isArray = true;
            break;
        }else{
            isArray = false;
        }   
    }
    
    if (isArray === false){
        array.push(element);
    }else {
        array;
    }
    
    return `newElement = ${element} -> ${array}`

}

let arr5 = [1,2,3,4];
let element = 4;
console.log(addArray(arr5,element));


/*
PROBLEM 01:_____________________________________________________________________________________
Write a function to remove all odd numbers in an array 
and return a new array that contains even number only
a. Example : arr=[1,2,3,4,5], newElement = 4 -> [1,2,3,4]

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

const numbers = [1, 2, 3, 4, 5, 6]
const newNumbers = removeOdd(numbers)
console.log(newNumbers)


/*
PROBLEM 02:_____________________________________________________________________________________
Write a function to insert multiple given integer 
(not an array) to an array and have a maximum size input. 
The array can only have maximum size from a given input is
than the array can only contain 5 element.
a. Example : 
        maxSize = 5, given integers is 5,10,24,3,6,7,8
        
        the function will return[5,10,24,3,6]

*/


function limitArray(max, ...nums) {
    const arrNums = [];
    nums.forEach((item) => {
      if (arrNums.length === max) return;
      arrNums.push(item);
    });
    return arrNums;
  }
  
  const arrOfNums = [5, 10, 24, 3, 6, 7, 8];
  const max = 5;
  console.log(limitArray(max, 5, 10, 24, 3, 6, 7, 8));


/*
PROBLEM 03:_____________________________________________________________________________________
Write a function that will combine 2 given array into 
one array.
a. Example : arr1 = [1,2,3], arr2 =[4,5,6] ->[1,2,3,4,5,6]

*/

function arraycombine(arr1,arr2){
    return arr1.concat(arr2)
}

const arra1 = [1,2,3];
const arra2 = [4,5,6];

console.log(arraycombine(arra1,arra2));

/*
PROBLEM 04:_____________________________________________________________________________________
Write a function to find duplicate values in an array
a. Example : arr1 = [1,2,2,2,3,3,4,5,5]->[2,3,5]

*/


function duplicates(array) {
    const duplicates = array.filter((item, index) => array.indexOf(item) !== index);
    return duplicates
}
const arr6 = [1,2,2,2,3,3,4,5,5];

console.log(duplicates(arr6));


/*
PROBLEM 05:_____________________________________________________________________________________
Write a function to find the difference in 2 given array
a. Example : arr1 = [1,2,3,4,5], arr2 = [3,4,5,6,7] ->[1,2,6,7]

*/
function difference (arr1,arr2){
    let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
    return difference
}

const arraA = [1,2,3,4,5];
const arraB = [3,4,5,6,7];

console.log(difference(arraA,arraB));

/*
PROBLEM 01:_____________________________________________________________________________________
Based on the array below write a function that will return 
primitive data types only.
arr=[1,[],undefined,{},"string",{},[]]
a. The function will return[1,undefined,"string"]
*/


/*
PROBLEM 02:_____________________________________________________________________________________
write a function from a given array of numbers and 
return the second smallest number
a. Example : numbers = [5,3,1,7,2,6]-> 2
*/

function small2ndarray(arr) {
    arr.sort();
    console.log(arr);
    secondsmall = arr[1]
    return secondsmall
}
const array3 = [5,3,1,7,2,6];
console.log(small2ndarray(array3));



/*
PROBLEM 03:_____________________________________________________________________________________
write a function from a given array of mixed data types and
return the sum of all the number
a. Example : mixedArray =["3",1,"string",null,false,undefined,2]->3
*/



/*
PROBLEM 04:_____________________________________________________________________________________
write a function from the below array of number that will 
return the sum of duplicate values.
arr = [10,20,40,10,50,30,10,60,10]
a. The function will return 40
*/

function sumDuplicate(arr){
    const duplicateValues = arr.filter((value,index,array)=>{        
        return array.indexOf(value) !== index;
    });// jadi patokan untuk mengecek di looping ke dua
    console.log(duplicateValues);

    let result = 0;
    for(let item of arr){
        if(duplicateValues.includes(item)){
            result += item;
        }
    }

    return result;
}

console.log(sumDuplicate([10,20,40,10,50,30,10,60,10]));


/*
PROBLEM 05:_____________________________________________________________________________________
write a game of rock, paper, scissor function that will 
return "Win"or"Lose. The function will randomly pick between
rock, paper, or scissor.
a. Example : if you throw a rock as an argument and 
the function pick a scissor then it will return "win"
*/


function gameSuit(playerChoice) {
    const choices = ["batu","gunting","kertas"];
    
    const compChoice = choices[Math.floor(Math.random()*2.9)];

    console.log(compChoice);

    if(!choices.includes(playerChoice)){
        return "Wrong Input";
    }

    if (playerChoice === compChoice){
        return "draw";
    }
    if (
        (playerChoice === "batu"&&compChoice === "gunting")||
        (playerChoice === "gunting"&&compChoice === "kertas")||
        (playerChoice === "kertas"&&compChoice === "batu")
    ){
        return "Win";
    }

    return "Lose";
}

console.log(gameSuit("gunting"));



