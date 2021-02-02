var btnInputs = document.querySelectorAll('.btn-wrapper button');
var textInput = document.querySelector('.text-input div');
var btnEqual = document.querySelector('.equals');
var clearBtn = document.querySelector('.reset');
var resultBtn = document.querySelector('.result');

btnInputs.forEach((btn) => btn.addEventListener('click', getInputs));
btnEqual.addEventListener('click', compute);
clearBtn.addEventListener('click', clearScreen);

function getInputs(e) {
    let operator = e.target.innerHTML;
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '9':
        case '8':
        case '7':
        case '6':
        case '5':
        case '4':
        case '3':
        case '2':
        case '1':
        case '0':
        case '.':
        case '(':
        case ')':
            textInput.textContent += operator;
            break;
        case '%':
            textInput.textContent = textInput.textContent / 100;
            break;
        default:
            break;
    }
}

function compute(e) {
    resultBtn.textContent = eval(textInput.textContent);
}

function clearScreen(e) {
    textInput.textContent = '';
    resultBtn.textContent = '';
}