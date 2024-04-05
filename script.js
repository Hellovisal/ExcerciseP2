//? 1.Write a declaration function that take a parameter called: “name”, and return a greeting message including that name
/*
function greeting(name){
 return `{name}`;
}
console.log("visal");
*/
/*
//? 2.Write an expression function that take two parameters “num1” & “num2” and returns their sum
let sum=function number (num1,num2) {
    let z=num1+num2;
    return z;
}
let result =sum(10,40);
console.log("sum of num1&num2:",result);
console.log("sum of num1&num2:",sum(10,20));
const calculateSum = function(num1, num2) {
    return num1 + num2;
};
let num1 = 10;
let num2 = 20;
let sum = calculateSum(num1, num2);
console.log("Sum:", sum);
/*

/*
//? 3.Write an arrow function that that take an array of numbers as a parameter and returns the average of those numbers
const average = (numbers) =>
  numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log( `Average number is: ${avg}`);
*/

//? 4.Write an anonymous function that calculates BMI (Body Mass Index). Formula: BMI = weight / (height * height)
// const myBmi =function(){
//     let weight=100;
//     let height=69;
//     let BMI=weight/(height*height);
//     console.log(BMI);
// }
// myBmi();
// bmi = (weight/(height*height)=>{

// });



/*
//* 5.Write a function that could take a parameter that is an array of objects representing products with `name`,
 `price` and `quantity` property and filter out products with a quantity of zero

 function filterInStockProducts(products) {
    return products.filter(product => product.quantity > 0);
  }
  
  // Example usage:
  const products = [
    { name: "Shirt", price: 10.00, quantity: 2 },
    { name: "Hat", price: 5.00, quantity: 0 },
    { name: "Jeans", price: 30.00, quantity: 1 },
  ];
  
  const filteredProducts = filterInStockProducts(products);
  console.log(filteredProducts);
  */


 /*
 //* 6.Write a function that could check if the password provided is strong or not. 
 A strong password should have a minimum length of 8 characters
 let password = "mypassword123";
  function isStrongPassword(password) {
    return password.length >= 8;
}

if (isStrongPassword(password)) {
    console.log("Password is strong");
} else {
    console.log("Password is not strong");
}
*/
// function check() {
// let login=false;
// let password;
// while(!login){
//     password=window.prompt("Enter your password:");
//     if(password.length >= 8){
//         login = true;
//         console.log("Your passwor is strong!");
//     }else{
//         login=false;
//         console.log("Your passwor is low,try again!");
//     }
// }
// }
// check();
/*


//* 7.Write a function that count vowels of a string that provided as an input and return the count of vowels (a, e, i, o, u)
function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  let vowels = '';

  // Iterate through each character of the string
  for (let char of str) {
    // Check if the character is a vowel
    if (
      char === "a" 
      char === "e" 
      char === "i" 
      char === "o" 
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
const inputString = prompt("Enter a string:");
// Check the count of vowels in the provided string
const vowelCount = countVowels(inputString);
alert(`Number of vowels in the string: ${vowelCount}`);
/*


//* 8.Write a function that could sort a list of numbers in ascending order.
/*
function bubbleSort(nums) {
  const n = nums.length;
  for (let i = 0; i < n-1; i++) {
      for (let j = i+1; j < n ; j++) {
          if (nums[j] < nums[j]) {
              let temp = nums[i];
              nums[i] = nums[j];
              nums[j] = temp;
          }
      }
  }
  return nums;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);
console.log("Sorted list is:", sortedNumbers);
*/


// ?9.Write a function that takes an array of numbers as an input and returns the median value
/*
function madianValue(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let medianNumber = 0;

  for (let index = 0; index < sortedArray.length; index++) {
    if (sortedArray.length % 2 == 0) {
      medianNumber = sortedArray.length / 2;
      return (array[medianNumber - 1] + array[medianNumber]) / 2;
    } else {
      return Math.ceil(sortedArray.length / 2);
    }
  }
}
console.log(madianValue([2, 5, 1, 2,4, 6, 9, 8,7,9,100]));
*/



//? 10.Write a function that takes a non negative number as a parameter and returns the factorial of that parameter
// function factoral(n) {
//   n=window.prompt("Enter number:");
//   let f=1;
//   let i;
//   for (i=1;i<=n;i++){
//     f=f*i;
//   }
//   console.log("Factorail is:",f);
  
// }
// factoral();

