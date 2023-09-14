const numbers = [1,2,3,4,5];

numbers.forEach(consoleItem);

function consoleItem(item,index,arr) {
    console.log(arr)
    
}

// array of items//

const items = [
    {name:'food',  price: 110},
    {name:'transport',  price: 70},
    {name:'airtime',  price: 50},
    {name:'laptop',  price: 23000},
    {name:'entertainment',  price: 310},
    {name:'water',  price: 150},
];

const filteredItems = items.filter((item) => {
return item.price >= 70         // if price is greater  than  or equal to   70 . 
})

console.log(filteredItems);


// DSA in javascript //

// 1. Arrays
// 2. String
// 3. Recursion
// 4. Objects

// 1 palindrome number 

// input x = 78;       output: true

// input x = 15        output: false

const isPalindrome = function(x) {
    return x === x.toString().split("")

}


let js = "funny";

console.log(40 + 8 + 23 - 10);

console.log("Yahoo Boy")
console.log(23);

let secondName = "Olauwyi" // declared a variable (secondName is being Olauwyi)

let age = 17;

console.log(secondName)

console.log(age + "1");

// rules //
// no use of reserved keywords

// dont start a variable with upper case letters

console.log("Yahuda")

let Person = "lilian"; 

