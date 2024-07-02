// 1:
function displayAlert(message) {
    for (let i= 1; i < 4; i++) {
        console.log(message + i)
    }
}
displayAlert("attempt #")

// 2:
function displayNumbers(multiplier) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * multiplier);
    }
}
displayNumbers(100)

// 3:
function displayNumber (times) {
    for (i = 0; i < times; i++) {
        console.log("Suco de Beterraba: " + i)
    }
}
displayNumber(4)

// 4:
function displayHours(start, end) {
    for (let i = start; i <= end; i++) {
        console.log("Estamos abertos às", i + ":00", "horas")
    }
}
displayHours(8, 17)

// 5:
const languages = ['JavaScript', 'Python', 'C++'];

function addLanguage(languages, language) {
    languages.push(language)
}
addLanguage(languages, 'Ruby')
console.log(languages)

// 6:
function multiply(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * 2;
     } return numbers;
}
console.log(multiply([1, 2, 3, 4]))

// 7:
const fruits = ['Apples', 'Bananas', 'Oranges'];

function searchFruits(fruits, searchPhrase) {
    const foundFruit = fruits.find(fruit => fruit === searchPhrase);
    if (foundFruit) {
        console.log(searchPhrase + ' are in the fruit basket!');
    } else {
        console.log('No such fruit in the fruit basket!');
    }
}
searchFruits(fruits, 'Apples')/

// 8:
function displayNumber() {
    for (i = 3; i <= 9; i++) {
        console.log(i)
    }
}
displayNumbers

// 9:
function printNumbers(numbers) {
    console.log(numbers);
}
printNumbers([1,2,3]);

// 10:
const firstNumber = 10;
const secondNumber = 5;

function add(num1, num2) {
    return num1 + num2;
}
const result = add(firstNumber, secondNumber)
console.log(result)

// 11:
const names = ['James','Adam', 'Sarah'];

function printEachName(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
}
printEachName(names)

// 12:
// const languages = ["JavaScript", "C++", "Python"];

// function findLanguage(languages, language) {
//     for (let i = 0; i < languages.length; i++) {
//         if (languages[i] === language) { // Atentar este erro
//             console.log(language + " found!");
//             break;
//         } else {
//             console.log(language + " not found.")
//         }
//     }
// }
// findLanguage(languages, "JavaScript")

// 13: 
const prices = [100, 150, 200];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
    let values = [];
    for (let i = 0; i < prices.length; i++) {
        values.push(prices[i] * discounts[i]);
    }
    console.log(values);
}
getValues(prices, discounts)

// 14:
const numbers = [1,2,3,4,5];

function doubleNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i] * 2);
    } 
}
doubleNumbers(numbers)

// 15:
function fuelCost (litres, costPerLitre) {
    totalCost = litres * costPerLitre;
    console.log(totalCost);
}
fuelCost(60, 1.44)

// 16:
function milesToKm (miles) {
    km = (miles / 5) * 8;
    return km;
}

console.log(milesToKm(70))

// 17:
const group = 4;
const total = 500;
const minimum = 150;

function stockCheck (groupSize, totalAvaiable, minPerUser) {
    if (minPerUser > totalAvaiable) {
        return "Insufficient for one user";
    } else if (groupSize * minPerUser > totalAvaiable) {
        return "Insufficient for all users"
    } else {
        return "Sufficient for all users";
    }
}
console.log (stockCheck(group, total, minimum))