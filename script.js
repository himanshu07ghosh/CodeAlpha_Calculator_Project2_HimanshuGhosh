// script.js
let operationCount = 0; // Track the number of operations

function appendToDisplay(value) {
    if (operationCount < 20) { // Limit to 20 operations
        document.getElementById('display').value += value;
        if (['+', '-', '*', '/'].includes(value)) {
            operationCount++;
        }
    } else {
        alert("Maximum of 20 operations reached.");
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    operationCount = 0; // Reset operation count on clear
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove last character
}

function calculateResult() {
    const display = document.getElementById('display');
    const operation = display.value;
    try {
        const result = eval(operation); // Calculate the result
        display.value = result; // Show only the result in the display
        operationCount++; // Increment operation count
    } catch (error) {
        display.value = 'Error';
    }
}


