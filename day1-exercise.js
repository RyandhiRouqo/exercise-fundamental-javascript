// PROBLEM 01:_____________________________________________________________________________________
// Write a code to find area of rectangle!

// Procedure:
// 1. Find out how to count area of rectangle
// 	Area of rectangle = Length x Width
// 2. Find out variables to count area of rectangle
// 	~area
// 	~lenght
// 	~width
// 3. Assign the variable value of the rectangle
// 	~length = 5
// 	~width = 3

// Solution:
// 1. Define variable 
let area ;
let lenght ;
let width ;

// 3. Assign the variable value
lenght = 5;
width = 3;

// 2. Write equations in code
area = lenght*width;

// 4. Displays the result and Finish
console.log(area);

// PROBLEM 02:_____________________________________________________________________________________
// Write a code to find perimeter of rectangle!

// Procedure:
// 1. Find out how to count perimeter of rectangle
// 	Perimeter = 2 x (Length + Width)
// 2. Find out variables to count area of rectangle
// 	~perimeter
// 	~lenght
// 	~width
// 3. Assign the variable value of the rectangle
// 	~length = 5
// 	~width = 3

// Solution:
// 1. Define variable 
let perimeter ;
let lenght2 ;
let width2 ;

// 3. Assign the variable value
lenght2 = 5;
width2 = 3;

// 2. Write equations in code
perimeter = 2*(lenght2+width2);

// 4. Displays the result and Finish
console.log(perimeter);


// PROBLEM 03:_____________________________________________________________________________________
// Write a code to find diameter, circumference and area of a circle!

// Procedure:
// 1. Find out how to count diameter, circumference and area of a circle
// 	Diameter = 2 x radius
//  Circumference = diameter x phi
//  Area = phi x radius^2
// 2. Find out variables to count count diameter, circumference and area of a circle
// 	~radius
// 	~diameter
// 	~circumference
//  ~area
// 3. Assign the variable value of the circle
// 	~radius = 5

// Solution:
// 1. Define variable 
let radius ;
let diameter ;
let circumference ;
let area3 ;

// 3. Assign the variable value
radius = 5;

// 2. Write equations in code
diameter = 2*radius;
circumference = diameter * Math.PI;
area3 = radius**2 * Math.PI; 

// 4. Displays the result and Finish
console.log(`Diameter = ${diameter}, Circumference = ${circumference}, Area = ${area3}`);

// PROBLEM 04:_____________________________________________________________________________________
// Write a code to find angles of triangle if two angles are given!

// Procedure:
// 1. Find out how find angles of triangle if two angles are given
// 	angel1 + angel2 + angel3 = 180
//  angel3 = 180 - (angel1 + angel2)
// 2. Find out variables to find angles of triangle if two angles are given
// 	~angel1
// 	~angel2
// 	~angel3
// 3. Assign the variable value of angles of triangle
// 	~angel1 = 80
// 	~angel2 = 65

// Solution:
// 1. Define variable 
let angel1 ;
let angel2 ;
let angel3 ;

// 3. Assign the variable value
angel1 = 80;
angel2 = 65;

// 2. Write equations in code
angel3 = 180 - (angel1 +angel2);

// 4. Displays the result and Finish
console.log(angel3);


// PROBLEM 05:_____________________________________________________________________________________
// Write a code to get difference between dates in day.

// Procedure:
// 1. Find out how to get difference between dates in day
//  difference date = absolute of (date1-date2)
// 2. Find out variables to count area of rectangle
// 	~date1
// 	~date2
// 3. Assign the variable value of date
// 	~date1 = 2022-01-20
// 	~date2 = 2022-01-22

// Solution:
// 1. Define variable 
let date1 ;
let date2 ;
let diff ;

// 3. Assign the variable value
date1 = new Date("2022-01-20");
date2 = new Date("2022-01-22");

// 2. Write equations in code
diff = Math.abs(date1-date2);
diff = diff/(24*3600*1000)

// 4. Displays the result and Finish
console.log(diff);


// PROBLEM 06:_____________________________________________________________________________________
// Write a code to convert days to years,months and days.
//  Notes : 1 Year = 365 days, 1 Month : 30 days

// Procedure:
// 1. Find out how to convert days to years,months and days.
//  years = rounds down of day / 365  
//  months = rounds down of (day % 365) / 30  
//  years = rounds down of (day1 % 365 % 30)
// 2. Find out variables to convert days to years,months and days.
// 	~days1
// 	~days2
// 	~day1
// 	~day2
// 3. Assign the variable value of days.
// 	~day1 = 400
// 	~day2 = 366

// Solution:
// 1. Define variable 
let day1 ;
let day2 ;
let days1 ;
let days2 ;

// 3. Assign the variable value
day1 = 400;
day2 = 366;

// 2. Write equations in code

let years01 = Math.floor(day1 / 365);
let months01 = Math.floor(day1 % 365 / 30);
let days01 = Math.floor(day1 % 365 % 30);

let years02 = Math.floor(day2 / 365);
let months02 = Math.floor(day2 % 365 / 30);
let days02 = Math.floor(day2 % 365 % 30);

// 4. Displays the result and Finish
console.log(`${day1} Days -> ${years01} Years, ${months01} Month, ${days01} Days`);
console.log(`${day2} Days -> ${years02} Years, ${months02} Month, ${days02} Days`);