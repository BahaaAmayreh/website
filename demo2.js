function enterNumber(number) {
    let textbox = document.getElementById("result");
    textbox.value = textbox.value + number;
}
function enterOperation(operation) {
    let textbox = document.getElementById("result");
    let lastChar = textbox.value.slice(-1);
    if (textbox.value.length === 0 && operation !== '-') {
        return;
    } else if (textbox.value.length === 1 && lastChar === '-') {
        return;
    }

    if (lastChar !== '+' &&
        lastChar !== '-' &&
        lastChar !== '*' &&
        lastChar !== '/') {
        textbox.value = textbox.value + operation;
    } else {
        //Another way to access the last element in the textbox.value
        //textbox.value =textbox.value.substring(0, textbox.value.toString().length - 1)
        //value.slice(0, -1):call extracts the elements from index 0 (inclusive) 
        //to the index just before the last element (exclusive)
        textbox.value = textbox.value.slice(0, -1) + operation;
    }
}
function calculate() {
    //Implement validation to prevent the execution of 
    //the equals (=) operation if the last character is 
    //an arithmetic operator (+, -, *, /).
    //write your own code!
    let textbox = document.getElementById("result");
    let result = eval(textbox.value);
    textbox.value = result;
}
function clearResult() {
    let textbox = document.getElementById("result");
    textbox.value = '';
}

function enterDot() {
    //.......
}


