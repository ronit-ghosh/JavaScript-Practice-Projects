const display = document.querySelector("#display");

function displayChar(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}
