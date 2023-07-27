// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const reverseString = (str) => {
    const reverseStringContainer = []
    for (i = str.length - 1; i >= 0; i--) {
        reverseStringContainer.push(str[i])
    }
    console.log((reverseStringContainer.join('')));
}

reverseString('hello world')

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const integerNumberArr = [2, -5, 10, -3, 7]
let sum = 0;
for (let i = 0; i < integerNumberArr.length; i++) {
    if (integerNumberArr[i] > 0) {
        sum = sum + integerNumberArr[i]
    }
}
console.log(sum);


//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

const mostRepeatedNumber = (arr) => {
    const hashMap = {}
    let maxRepeat = 0;
    let mostFrequentNumber = 0;
    arr.forEach(number => {
        if (hashMap[number]) {
            hashMap[number]++
        } else {
            hashMap[number] = 1
        }

        if (hashMap[number] > maxRepeat) {
            maxRepeat = hashMap[number]
            mostFrequentNumber = number;
        }
    })
    console.log('Most frequent number is: ' + mostFrequentNumber);
}

mostRepeatedNumber([3, 5, 2, 5, 3, 3, 1, 4, 5])

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

const sortedSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == target) {
            return [left, right]
        } else if (target > sum) {
            left++
        } else {
            right--
        }
    }
    return `There are no numbers which sum is equal to ${target}`
}

console.log(sortedSum([1, 3, 6, 8, 11, 15], 9));

//Task 5:  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

const calculateTwoNumbers = (number1, number2, operator) => {
    if (operator == '+') {
        return number1 + number2
    } else if (operator == '-') {
        return number1 - number2
    } else if (operator == '*') {
        return number1 * number2;
    } else {
        return number1 / number2;
    }
}


console.log(calculateTwoNumbers(1, 3, '/'));


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%&*";
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = "";
    password += uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
    password += lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    length -= 4

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    console.log(password);
}
generateRandomPassword(6)

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumber) {
    const romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    let oldValue = 0;

    for (let i = romanNumber.length - 1; i >= 0; i--) {
        const numeral = romanNumber[i];
        const value = romanToInt[numeral];

        if (value >= oldValue) {
            total += value;
        } else {
            total -= value;
        }

        oldValue = value;
    }

    console.log(total);
}

romanToInt('VI')

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers.

const secondSmallestArr = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr[sortedArr.length - 2]);
}
secondSmallestArr([1, 2, 3, 5, 4, 7, 11, 90, 25, 27, 125])