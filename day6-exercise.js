/*
PROBLEM 01:_____________________________________________________________________________________
Create a function to calculate array of student data
The object has this following properties :
    Name->String
    Email->String
    Age->Date
    Score->Number
Parameters : array of student
Return values:
    Object with this following properties:
        Score
            Highest
            Lowest
            Average
        Age
            Highest
            Lowest
            Average

*/

let student = [
    {name : "Budi",email : "budi@mail.com", age : '10/11/2003', score : 82},
    {name : "Joko",email : "joko@mail.com", age : '05/02/2005', score : 75},
    {name : "Siti",email : "siti@mail.com", age : '05/28/2001', score : 93},
    {name : "Diah",email : "diah@mail.com", age : '1999/07/14', score : 86}
]
console.log(student.length);

function calculate (student) {
    let scores = [];
    for(i=0;i<student.length;i++){
        scores.push(student[i]['score'])
    }
    console.log(scores);
    let scoremax = Math.max(...scores);
    console.log(scoremax);
    let scoremin = Math.min(...scores);  
    console.log(scoremin);
    let scoreaverage = scores.reduce((a,b)=>a+b,0)/scores.length;
    console.log(scoreaverage)

    let ages = [];
    for(i=0;i<student.length;i++){
        const getAge = birthDate => Math.floor((new Date()- new Date(birthDate).getTime())/(365.25*24*3600*1000))
        const age = getAge(student[i]['age'])
        ages.push(age)
    }
    console.log(ages);
    let agemax = Math.max(...ages);
    console.log(agemax);
    let agemin = Math.min(...ages);
    console.log(agemin);
    let ageaverage = ages.reduce((a,b)=>a+b,0)/ages.length;
    console.log(ageaverage)

    // const result = [
    //     {score : {
    //         highest: scoremax, 
    //         lowest: scoremin, 
    //         average: scoreaverage
    //     }},
    //     {age :{
    //         highest: agemax, 
    //         lowest: agemin, 
    //         average: ageaverage
    //     }},
    // ]

    return [
        {score : {
            highest: scoremax, 
            lowest: scoremin, 
            average: scoreaverage
        }},
        {age :{
            highest: agemax, 
            lowest: agemin, 
            average: ageaverage
        }},
    ]
}

console.log(calculate(student));


/*
PROBLEM 02:_____________________________________________________________________________________
Create a program to create transaction
Product Class
    Properties
        Name
        Price
Transaction Class
    Properties
        Total
        Product
            All product data
            Qty
    Add to cart method->Add product to transaction
    Show total method->Show total current transaction
    Checkout method-> Finalize transaction, return transaction data

*/

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}

class Transaction extends Product{
    constructor(total,Product){
        super(Product);
        this.total = total;
    }

    addToCart(product,qty){
        const exitingProduct = this.addToCart.find(
            (item)=> item.product.name === product.name
        );
        console.log();
    }



}

let product1 = new Product ("rokok",10000);
let product2 = new Product ("korek",5000);
let product3 = new Product ("kopi",15000);
let product4 = new Product ("pisang",2500);

console.log(product1);
console.log(product2);
console.log(product3);
console.log(product4);


