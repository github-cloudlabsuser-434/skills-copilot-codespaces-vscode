const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Error! Division by zero is not allowed.');
    }
    return a / b;
}

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
        rl.question('Enter the second number: ', (secondNumber) => {
            let result;
            const a = parseFloat(firstNumber);
            const b = parseFloat(secondNumber);

            try {
                switch(operator) {
                    case '+':
                        result = add(a, b);
                        break;
                    case '-':
                        result = subtract(a, b);
                        break;
                    case '*':
                        result = multiply(a, b);
                        break;
                    case '/':
                        result = divide(a, b);
                        break;
                    default:
                        console.log('Invalid operator! Please enter one of +, -, *, /.');
                        rl.close();
                        return;
                }

                console.log(`The result is: ${result}`);
            } catch (error) {
                console.log(error.message);
            }

            rl.close();
        });
    });
});
module.exports = { subtract, add };