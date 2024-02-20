/*
PROBLEM 01:_____________________________________________________________________________________
Create a function to check if two object are equal
Example
    Input: { a: 2} & { a: 1}
    Output: false
Example
    Input: { a: "Hello"} & { a: 1}
    Output: false
Example
    Input: { a: 1} & { a: 1}
    Output: true
*/

// CARA I

function compare(input1, input2) {
    if (input1.a === input2.a) {
      return true;
    } else {
      return false;
    }
  }
  
  const input1 = { a: 2 };
  const input2 = { a: 2 };
  
  console.log(compare(input1, input2));
  
  // CARA II
  
  function compare2(input1, input2) {
    const key1 = Object.keys(input1);
    const key2 = Object.keys(input2);
  
    if (key1.length !== key2.length) {
      return false;
    }
  
    for (const key of key1) {
      if (input1[key] !== input2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(compare2(input1, input2));
  
  /*
  PROBLEM 02:_____________________________________________________________________________________
  Create a function to get the intersection of two object
  Example
      Input: { a: 1, b: 2} & { a: 1, c: 3}
      Output: { a: 1}
  */
  
  // CARA I
  
  function intersection(data1, data2) {
    const data1keys = Object.keys(data1);
    console.log(data1keys);
    const data2keys = Object.keys(data2);
    console.log(data2keys);
    const interkeys = data1keys.filter((value) => data2keys.includes(value));
    console.log(interkeys);
  
    const output = new Object();
  
    for (i = 0; i < interkeys.length; i++) {
      if (data1[interkeys[i]] === data2[interkeys[i]]) {
        output[interkeys[i]] = data1[interkeys[i]];
      }
    }
    return output;
  }
  
  const data1 = { a: 1, b: 2, d: 4 };
  const data2 = { b: 2, a: 1, c: 3 };
  
  console.log(intersection(data1, data2));
  
  // CARA II
  
  // function intersection(data1, data2) {
  //   const output = {};
  
  //   for (const key in data1) {
  //     console.log(`${key}`);
  //     if (data2.hasOwnProperty(key) && data1[key] === data2[key]) {
  //       x = data2.hasOwnProperty(key) && data1[key];
  //       console.log(x);
  //       output[key] = data1[key];
  //     }
  //   }
  
  //   return output;
  // }
  
  // const data1 = {a:1,b:2,c:3};
  // const data2 = { b: 2};
  
  // console.log(intersection(data1, data2));
  
  //CARA III
  
  const inter = (obj1, obj2) => {
    const duplicate = {};
  
    for (let key in obj1) {
      console.log(key);
      if (obj1[key] == obj2[key]) {
        duplicate[key] = obj1[key];
      }
    }
    return duplicate;
  };
  
  console.log(inter(data1, data2));
  
  /*
  PROBLEM 03:_____________________________________________________________________________________
  Create a function to merge two array of student data and remove duplicate data
  Example:
      Array1->[
          (name:"Student 1", email: student1@mail.com),
          (name:"Student 2", email: student2@mail.com),
      ]
      Array2->[
          (name:"Student 1", email: student1@mail.com),
          (name:"Student 3", email: student3@mail.com),
      ]
  Result:
      ArrayResult->[
          (name:"Student 1", email: student1@mail.com),
          (name:"Student 2", email: student2@mail.com),
          (name:"Student 3", email: student3@mail.com),
      ]
  
  */
  
  // CARA I
  
  function merge(arr1, arr2) {
    const obj1 = arr1[0];
    console.log(obj1);
    const obj2 = arr2[0];
    console.log(obj2);
  }
  
  const arr1 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 2", email: "student2@mail.com" },
  ];
  
  const arr2 = [
    { name: "Student 1", email: "student1@mail.com" },
    { name: "Student 3", email: "student3@mail.com" },
  ];
  
  console.log(merge(arr1, arr2));
  
  // CARA II
  
  const removeDuplicate = (arr1, arr2) => {
    const combineArray = [...arr1, ...arr2];
    console.log(combineArray);
  
    const temp = [];
  
    for (let i = 0; i < combineArray.length; i++) {
      const duplicateValue = temp.filter((val) => {
        return val.email === combineArray[i].email;
      });
  
      if (!duplicateValue.length) {
        temp.push(combineArray[i]);
      }
    }
  
    return temp;
  };
  
  console.log(removeDuplicate(arr1, arr2));
  
  /*
  PROBLEM 04:_____________________________________________________________________________________
  Create a function that can accept input as an array of object and switch all values into property and property into value
  Example
      Input: [{ name: "David", age: "20"}]
      Output: [{ David: "name", 20: "age"}]
  */
  const result = [];
  
  const switchValueToKey = (arr) => {
    arr.forEach((item) => {
      let temp = {};
  
      for (let key in item) {
        console.log(key);
        console.log(item[key]);
        temp[item[key]] = key;
      }
  
      result.push(temp);
    });
  
    return result;
  };
  const arg = [{ name: "David", age: "20" }];
  console.log(switchValueToKey(arg));
  
  /*
  PROBLEM 05:_____________________________________________________________________________________
  Create a function to find a factorial number using recursion 
  Example
      Input: 5
      Output: 5! = 5x4x3x2x1 =120
  */
  
  const factorial = (n) => {
      if(n===0){
          return 1;
      } else {
          return n*factorial(n-1);
      }
  };
  
  const n = 5;
  
  console.log(factorial(n))
  
  const factorial2 = (n) => {
      if(n===1){
          return {
              steps: ["1"],
              total: 1,
          };
      } else {
          const next = factorial2(n-1);
  
          return {
              steps: [n, ...next.steps],
              total: n*next.total,
          };
      }
  };
  
  
  
  const {steps, total} = factorial2(n)
  console.log(steps.join(" x ")+" = "+ total)
  