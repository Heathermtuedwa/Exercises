let numbers = [5, 8, 2, 10, 4, 3, 7, 9, 1];
function findMin() {
    let min = Math.min(...numbers);
    alert("The minimum number is: " + min);
}

function findMax() {
    let max = Math.max(...numbers);
    alert("The maximum number is: " + max);
}

let display = document.getElementById('result');
let btnAdd = document.querySelector('[data-add]');
btnAdd.addEventListener('click', sumOfNum);

function sumOfNum() {
    let inputArray = document.getElementById('inputArray').value;
    let array = inputArray.split(',').map(Number);

    let sum = 0;
    let hasNumbers = false;

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            sum += array[i];
            hasNumbers = true;
        }
    }

    if (hasNumbers) {
        display.innerText = `Sum of numbers: ${sum}`;
    } else {
        display.innerText = 'Provide only numbers';
    }
}