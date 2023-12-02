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
const 

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