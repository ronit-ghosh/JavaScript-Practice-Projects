const decreaseButton = document.querySelector(".decreaseButton");
const increaseButton = document.querySelector(".increaseButton");
const resetButton = document.querySelector(".resetButton");
const counter = document.querySelector(".counter");

let count = 0;

increaseButton.onclick = ()=> {
    count++;
    counter.textContent = count;
}

decreaseButton.onclick = ()=>{
    count--;
    counter.textContent = count;
}

resetButton.onclick = ()=>{
    counter.textContent = 0;
}