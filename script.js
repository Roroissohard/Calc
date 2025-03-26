const display = getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(Error){
        display.value = "Error";
    }
}