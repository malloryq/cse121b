/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  function addNumbers() {
    // Getting values from HTML form controls and converting them to numbers
    const addNumber1 = Number(document.querySelector('#add1').value);
    const addNumber2 = Number(document.querySelector('#add2').value);
  
    // Calling the add function and assigning the return value to the HTML form element with ID 'sum'
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }
  
  // Adding a "click" event listener to the HTML button with ID 'addNumbers'
  document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
};

function subtractNumbers() {
    const subtractNumber1 = Number(document.querySelector('#subtract1').value);
    const subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector('#factor1').value);
    const factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
// Function Declaration - Divide Numbers
function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);

    const quotient = divide(dividend, divisor);
    if (isFinite(quotient)) {
        document.querySelector('#quotient').value = quotient;
    } else {
        document.querySelector('#quotient').value = 'Cannot divide by zero!';
    }
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



function calculateTotal() {
    // Getting the subtotal value
    const subtotal = parseFloat(document.querySelector('#subtotal').value);

    // Checking if the checkbox for membership is checked
    const isMember = document.querySelector('#member').checked;

    // Applying the discount if the user is a member
    const discount = isMember ? 0.15 : 0;
    const total = subtotal - (subtotal * discount);

    // Displaying the total with two decimal places in the designated span
    document.querySelector('#total').textContent = `$${total.toFixed(2)}`;
}

// Adding an event listener to the 'Get Total Due' button
document.querySelector('#getTotal').addEventListener('click', calculateTotal);

/* Decision Structure */
/* ARRAY METHODS - Functional Programming */

// Declare and instantiate an array variable to hold numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);
/* Output Source Array */
// Assign the value of the array variable to the HTML element with an ID of array
document.querySelector('#array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
// Use filter() to find all odd numbers and assign the result to the HTML element with an ID of odds
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.querySelector('#odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */

// Use filter() to find all even numbers and assign the result to the HTML element with an ID of evens
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector('#evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */

// Use reduce() to sum the array elements and assign the result to the HTML element with an ID of sumOfArray
const sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.querySelector('#sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
// Use map() to multiply each element in the array by 2 and assign the result to the HTML element with an ID of multiplied
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
// Use map() and reduce() to sum the array elements after multiplying each element by two
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((acc, curr) => acc + curr, 0);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;









