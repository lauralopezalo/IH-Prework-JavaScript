const calculatorContainer = document.querySelector('.calculator-container');
const output = document.querySelector('.output');
let currentNum = '';
let previousNum = '';
let operation = '';
let result = 0;

calculatorContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const value = event.target.textContent;

        if (!isNaN(value)) {
            currentNum += value;
            output.value = currentNum;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            previousNum = currentNum;
            currentNum = '';
            operation = value;
        } else if (value === 'C') {
            currentNum = '';
            previousNum = '';
            operation = '';
            output.value = '0';
        } else if (value === '=') {
            switch (operation) {
                case '+':
                    result = parseInt(previousNum) + parseInt(currentNum);
                    break;
                case '-':
                    result = parseInt(previousNum) - parseInt(currentNum);
                    break;
                case '*':
                    result = parseInt(previousNum) * parseInt(currentNum);
                    break;
                case '/':
                    result = parseInt(previousNum) / parseInt(currentNum);
                    break;
            }
            output.value = result;
            currentNum = result;
        }
    }
});
