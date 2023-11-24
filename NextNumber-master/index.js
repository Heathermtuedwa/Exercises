// Get elements from the DOM
const displayNumber = document.getElementById('display-number');
const nextButton = document.getElementById('next-button');

// Initial number
let currentNumber = 1;

// Function to update and display the next number
function updateNumber() {
  currentNumber++;
  displayNumber.textContent = currentNumber;
}

// Event listener for the button click
nextButton.addEventListener('click', updateNumber);
