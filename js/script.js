// Function keys
const clearKey = document.querySelector('#clear-key');
const deleteKey = document.querySelector('#delete-key');
const allFunctionKeys = document.querySelectorAll('.function__key');
// Operator keys
const plusMinusKey = document.querySelector('#plus-minus-key');
const divideKey = document.querySelector('#divide-key');
const timesKey = document.querySelector('#times-key');
const minusKey = document.querySelector('#minus-key');
const plusKey = document.querySelector('#plus-key');
const equalsKey = document.querySelector('#equals-key');
const allOperatorKeys = document.querySelectorAll('.operator__key');
// Number keys
const zeroKey = document.querySelector('#zero-key');
const oneKey = document.querySelector('#one-key');
const twoKey = document.querySelector('#two-key');
const threeKey = document.querySelector('#three-key');
const fourKey = document.querySelector('#four-key');
const fiveKey = document.querySelector('#five-key');
const sixKey = document.querySelector('#six-key');
const sevenKey = document.querySelector('#seven-key');
const eightKey = document.querySelector('#eight-key');
const nineKey = document.querySelector('#nine-key');
const dotKey = document.querySelector('#dot-key');
const allNumberKeys = document.querySelectorAll('.number__key')
// Number and operation display containers
const operationsDisplayValue = document.querySelector('.operations__display');
const numberDisplayValue = document.querySelector('.number__display');

// Initial number and operator values THINK OF STARTING VALUES '' AS EMPTY STRINGS; USERS SHOULD BE ABLE TO ADD TO ZERO
let firstNumber = 0;
let secondNumber = 0;
let operandSign = '';
let result = null;

// Operate function
function operate(num1, num2, operator){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '**':
            return exponent(num1, num2);
            break;
        default: 
        return 'Something went wrong';
    }
}

numberDisplayValue.textContent = firstNumber;
operationsDisplayValue.textContent = '';

function updateNumberDisplay(number){
    firstNumber = number;
    // This will set the second number back to 0, its default
    secondNumber = number;
    operationsDisplayValue.textContent = '';
    return numberDisplayValue.textContent = firstNumber;
}

// Dot event listener
dotKey.addEventListener('click', () => {
    if(!firstNumber.toString().includes('.')){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += ".";
        numberDisplayValue.textContent = firstNumber;
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === '.'){
        if(!firstNumber.toString().includes('.')){
            if(firstNumber === 0){
                firstNumber = '';
            }
            firstNumber += ".";
            numberDisplayValue.textContent = firstNumber;
        }
    }
});

// Zero key event listener
zeroKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "0";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '0'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "0";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// One key event listener
oneKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "1";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '1'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "1";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Two key event listener
twoKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "2";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '2'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "2";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Three key event listener
threeKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "3";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '3'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "3";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Four key event listener
fourKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "4";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '4'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "4";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Five key event listener
fiveKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "5";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '5'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "5";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Six key event listener
sixKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "6";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '6'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "6";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Seven key event listener
sevenKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "7";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '7'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "7";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Eight key event listener
eightKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "8";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '8'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "8";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Nine key event listener
nineKey.addEventListener('click', () => {
    if(firstNumber === 0){
        firstNumber = '';
    }
    firstNumber += "9";
    numberDisplayValue.textContent = firstNumber;
    firstNumber = +firstNumber;
});

document.addEventListener('keydown', function(e) {
    if (e.key === '9'){
        if(firstNumber === 0){
            firstNumber = '';
        }
        firstNumber += "9";
        numberDisplayValue.textContent = firstNumber;
        firstNumber = +firstNumber;
    }
});

// Clear key event listener
clearKey.addEventListener('click', () => {
    updateNumberDisplay(0);
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'c'){
        updateNumberDisplay(0);
    }
});

// Delete key event listener
deleteKey.addEventListener('click', () => {
    if(firstNumber !== 0){
            
        if(firstNumber.toString().slice(-2, -1) === '.'){
            firstNumber = firstNumber.toString().slice(0, -2);
        } else {
            firstNumber = firstNumber.toString().slice(0, -1);
        }

        if(firstNumber === 0 || firstNumber === '' || firstNumber === '0'){
            numberDisplayValue.textContent = 0;
        } else {
            numberDisplayValue.textContent = firstNumber;
        }

        firstNumber = +firstNumber;

    }
});

document.addEventListener('keydown', function(e){
    if (e.key === 'Backspace'){
        if(firstNumber !== 0){

            if(firstNumber.toString().slice(-2, -1) === '.'){
                firstNumber = firstNumber.toString().slice(0, -2);
            } else {
                firstNumber = firstNumber.toString().slice(0, -1);
            }

            if(firstNumber === 0 || firstNumber === '' || firstNumber === '0'){
                numberDisplayValue.textContent = 0;
            } else {
                numberDisplayValue.textContent = firstNumber;
            }

            firstNumber = +firstNumber;

        }
    }
});

// Equals key event listener
equalsKey.addEventListener('click', () => {
    if((firstNumber !== 0 && firstNumber !== '') || (secondNumber !== 0)){
    // The secondNumber is the first argument because it actually holds the value of the first/initial number
    // Likewise, the firstNumber variable actually holds the second number value and is reset to the resulting number of the operation
    if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
        result = 'Error';
    } else {
        result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
    }
    numberDisplayValue.textContent = result;
    operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;

    firstNumber = result;
    // Resets secondNumber to empty string
    secondNumber = '';
    operandSign = '';
    }
});

// Equals AND plus key event listeners
document.addEventListener('keydown', function(e) {
    if (e.keyCode === 187) {
        if (e.shiftKey) {
            // Plus key was pressed
            if(operandSign !== ''){
                if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
                    result = 'Error';
                } else {
                    result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
                }
                numberDisplayValue.textContent = result;
                operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
            
                firstNumber = result;
        
                operandSign = '+';
                operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
                // Very important, assigns value of first number to secondNumber variable
                // After this, the first number becomes like the real "second number" until equals is clicked
                secondNumber = firstNumber;
                firstNumber = '';
            } else {
                operandSign = '+';
                operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
                // Very important, assigns value of first number to secondNumber variable
                // After this, the first number becomes like the real "second number" until equals is clicked
                secondNumber = firstNumber;
                firstNumber = '';
            }
        } else {
            // Equals key was pressed
            if((firstNumber !== 0 && firstNumber !== '') || (secondNumber !== 0)){
                // The secondNumber is the first argument because it actually holds the value of the first/initial number
                // Likewise, the firstNumber variable actually holds the second number value and is reset to the resulting number of the operation
                result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
                numberDisplayValue.textContent = result;
                operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
            
                firstNumber = result;
                // Resets secondNumber to empty string
                secondNumber = '';
                operandSign = '';
            }
        }
    }
});

// Runs equal when enter is pressed
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter'){
        if((firstNumber !== 0 && firstNumber !== '') || (secondNumber !== 0)){
            // The secondNumber is the first argument because it actually holds the value of the first/initial number
            // Likewise, the firstNumber variable actually holds the second number value and is reset to the resulting number of the operation
            if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
                result = 'Error';
            } else {
                result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
            }
            numberDisplayValue.textContent = result;
            operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
        
            firstNumber = result;
            // Resets secondNumber to empty string
            secondNumber = '';
            operandSign = '';
            }
    }
});

// Plus/minus key event listener
plusMinusKey.addEventListener('click', () => {
    if(firstNumber !== 0 && firstNumber !== ''){
        firstNumber = firstNumber * (-1);
        numberDisplayValue.textContent = firstNumber;
    }
});


minusKey.addEventListener('click', () => {
    if(operandSign !== ''){
        if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
            result = 'Error';
        } else {
            result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
        }
        numberDisplayValue.textContent = result;
        operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
    
        firstNumber = result;

        operandSign = '-';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    } else {
        operandSign = '-';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    }
});

plusKey.addEventListener('click', () => {
    if(operandSign !== ''){
        if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
            result = 'Error';
        } else {
            result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
        }
        numberDisplayValue.textContent = result;
        operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
    
        firstNumber = result;

        operandSign = '+';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    } else {
        operandSign = '+';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    }
});

/* OG event listener
timesKey.addEventListener('click', () => {
    operandSign = 'x';
    operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
    // Very important, assigns value of first number to secondNumber variable
    // After this, the first number becomes like the real "second number" until equals is clicked
    secondNumber = firstNumber;
    firstNumber = '';
});
*/

timesKey.addEventListener('click', () => {
    if(operandSign !== ''){
        if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
            result = 'Error';
        } else {
            result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
        }
        numberDisplayValue.textContent = result;
        operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
    
        firstNumber = result;

        operandSign = 'x';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    } else {
        operandSign = 'x';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    }
});

divideKey.addEventListener('click', () => {
    if(operandSign !== ''){
        if ((firstNumber === 0 || firstNumber === '') && operandSign === '/'){
            result = 'Error';
        } else {
            result = Number((operate(secondNumber, firstNumber, operandSign)).toFixed(4));
        }
        numberDisplayValue.textContent = result;
        operationsDisplayValue.textContent = `${secondNumber} ${operandSign} ${firstNumber} = ${result}`;
    
        firstNumber = result;

        operandSign = '/';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    } else {
        operandSign = '/';
        operationsDisplayValue.textContent = `${firstNumber} ${operandSign} `;
        // Very important, assigns value of first number to secondNumber variable
        // After this, the first number becomes like the real "second number" until equals is clicked
        secondNumber = firstNumber;
        firstNumber = '';
    }
});


// Math operation functions
function add(a, b){
    return Number(a) + Number(b);
}

function subtract(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a, b){
    return Number(a) / Number(b);
}

function plusMinus(a){
    return Number(a) * (-1);
}

function exponent(a, b){
    return Number(a) ** Number(b);
}


// Loops over all number keys and uses event listeners to add/remove classes
for (let i = 0; i < allNumberKeys.length; i++){
    allNumberKeys[i].addEventListener('mousedown', () => {
        allNumberKeys[i].classList.add('number__key__click');
    });

    allNumberKeys[i].addEventListener('mouseup', () => {
        allNumberKeys[i].classList.remove('number__key__click');
    
    });

    allNumberKeys[i].addEventListener('mouseleave', () => {
        allNumberKeys[i].classList.remove('number__key__click');
    
    });
}

// Loops over all function keys and uses event listeners to add/remove classes
for (let i = 0; i < allFunctionKeys.length; i++){
    allFunctionKeys[i].addEventListener('mousedown', () => {
        allFunctionKeys[i].classList.add('function__key__click');
    });

    allFunctionKeys[i].addEventListener('mouseup', () => {
        allFunctionKeys[i].classList.remove('function__key__click');
    
    });

    allFunctionKeys[i].addEventListener('mouseleave', () => {
        allFunctionKeys[i].classList.remove('function__key__click');
    
    });
}

// Loops over all operator keys and uses event listeners to add/remove classes
for (let i = 0; i < allOperatorKeys.length; i++){
    allOperatorKeys[i].addEventListener('mousedown', () => {
        allOperatorKeys[i].classList.add('operator__key__click');
    });

    allOperatorKeys[i].addEventListener('mouseup', () => {
        allOperatorKeys[i].classList.remove('operator__key__click');
    
    });

    allOperatorKeys[i].addEventListener('mouseleave', () => {
        allOperatorKeys[i].classList.remove('operator__key__click');
    
    });
}