const inputValue = document.querySelector("#inputBox");
const toFarenheit = document.querySelector("#toFarenheit");
const toCelsius = document.querySelector("#toCelcius");
const answer = document.querySelector("#answer");

let temperature;

function tempConverter(){
    if(toFarenheit.checked){
        temperature = Number(inputValue.value);
        temperature = (temperature * 9 / 5) + 32;
        answer.textContent = temperature.toFixed(1) + " °F";
    }
    else if(toCelsius.checked){
        temperature = Number(inputValue.value);
        temperature = (temperature - 32)* (5 / 9);
        answer.textContent = temperature.toFixed(1) + " °C";
    }
    else{
        answer.textContent = "CHECK ANY OPTION";
    }
}


//--For <input type="button"> you have to add below code in js--
// document.querySelector("form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent form submission
//     tempConverter(); // Call the temperature converter function
// });