// ref to DOB input 
const dobInput = document.querySelector('#date');
// ref to lucky number
const numberInput = document.querySelector('#number');
// ref to check button
const checkButton = document.querySelector('#button');

// declaring function amILucky
function amILucky() {
    const dateOfBirth = (dobInput.value).split("-");
    const sumOfDOB = addDOB(dateOfBirth);
    const luckyNumber = numberInput.value;
    const luck = checkLuck(sumOfDOB, luckyNumber);
    console.log(luck);
}

// adding event listener to check button
checkButton.addEventListener("click", amILucky);

// FUNCTIONS

// function to separate date, month, year from array calculate sum
function addDOB(dateOfBirth) {
    let sum = 0;
    dateOfBirth.map(value => {
        let temp = getSum(parseInt(value))
        sum = sum + temp;
    })
    return sum;
}

// function to check birthday for luck
function checkLuck(sum, num) {
    if(sum%num === 0) {
        return true;
    } else {
        return false;
    }
}

// function to get sum of digits
function getSum(number) {
    var sum = 0;
    while (number != 0) {
        let temp = number % 10;
        number = Math.floor(number / 10);
        sum += temp;
    }
    return sum;
}