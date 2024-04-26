let timer;
let isRunning = false;
let milisec = 0;
let sec = 0;
let min = 0;
let hour = 0;

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const timerDisplay = document.querySelector("#display");

function start() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(update, 10);
        startStopBtn.textContent = "Pause"
    }
    else {
        isRunning = false;
        clearInterval(timer);
        startStopBtn.textContent = "Start";
    }
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    milisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    timerDisplay.textContent = "00:00:00:00"
    startStopBtn.textContent = "Start";
}

function update() {
    milisec++;
    if (milisec == 100) {
        milisec = 0;
        sec++
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }
    const updated = `${pad(hour)}:${pad(min)}:${pad(sec)}:${pad(milisec)}`;
    timerDisplay.textContent = updated;
}

function pad(e){
    return String(e).padStart(2, 0);
}


startStopBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);