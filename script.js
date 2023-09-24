document.addEventListener("DOMContentLoaded", function () {
    const inputDisplay = document.getElementById("input");
    const operatorDisplay = document.getElementById("operator");
    const outputDisplay = document.getElementById("output");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;

    function updateInputDisplay() {
        inputDisplay.textContent = currentInput;
    }

    function updateOperatorDisplay() {
        operatorDisplay.textContent = currentOperator;
    }

    function updateOutputDisplay(result) {
        outputDisplay.textContent = result;
    }

    function clear() {
        currentInput = "";
        currentOperator = "";
        firstOperand = null;
        updateInputDisplay();
        updateOperatorDisplay();
        updateOutputDisplay("0");
    }

    function handleNumberClick(number) {
        currentInput += number;
        updateInputDisplay();
    }

    function handleOperatorClick(operator) {
        if (currentOperator !== "") {
            calculate();
        }
        firstOperand = parseFloat(currentInput);
        currentInput = "";
        currentOperator = operator;
        updateInputDisplay();
        updateOperatorDisplay();
    }

    function calculate() {
        const secondOperand = parseFloat(currentInput);
        let result = "";
        switch (currentOperator) {
            case "+":
                result = (firstOperand + secondOperand).toString();
                break;
            case "-":
                result = (firstOperand - secondOperand).toString();
                break;
            case "*":
                result = (firstOperand * secondOperand).toString();
                break;
            case "/":
                if (secondOperand === 0) {
                    result = "Error";
                } else {
                    result = (firstOperand / secondOperand).toString();
                }
                break;
        }
        currentOperator = "";
        firstOperand = null;
        currentInput = result;
        updateInputDisplay();
        updateOperatorDisplay();
        updateOutputDisplay(result);
    }

    document.getElementById("clear").addEventListener("click", clear);

    document.getElementById("calculate").addEventListener("click", calculate);

    const numbers = document.querySelectorAll(".number");
    numbers.forEach((number) => {
        number.addEventListener("click", () => {
            handleNumberClick(number.textContent);
        });
    });

    const operators = document.querySelectorAll(".operator");
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            handleOperatorClick(operator.textContent);
        });
    });

    document.getElementById("decimal").addEventListener("click", () => {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateInputDisplay();
        }
    });
});
