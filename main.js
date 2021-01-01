// ref to DOB input 
const dobInput = document.querySelector('#date');
// ref to lucky number
const numberInput = document.querySelector('#number');
// ref to check button
const checkButton = document.querySelector('#button');

// declaring function amILucky
function amILucky() {
    const dateOfBirth = (dobInput.value).split("-");
    const sumOfDOB = add(dateOfBirth);
    const luckyNumber = numberInput.value;
    const luck = checkLuck(sumOfDOB, luckyNumber);
    console.log(luck)
}

// adding event listener to check button
checkButton.addEventListener("click", amILucky);

// FUNCTIONS

// function to return sum of digits of DOB
function add(dateOfBirth) {
    let sum = 0;
    dateOfBirth.map(value => {
        sum = sum + parseInt(value);
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