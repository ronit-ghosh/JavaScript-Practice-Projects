console.log("Hey It's me Ronit")

// Generates bubbles with random numbers
function makeBubbles() {
    for (let i = 1; i <= 40; i++) {
        let random = Math.floor(Math.random() * 10);
        bubbles_container.innerHTML += `<div id="bubbles">${random}</div>`;
    }
}

// Generates random hit number
let randomNum;
function randomHitNumber() {
    randomNum = Math.floor(Math.random() * 10);
    hit_num.textContent = randomNum;
}

// Game timer
let gameTime = 60;
let interval;
function timeUpdate() {
    interval = setInterval(() => {
        if (gameTime >= 0) {
            updateTimer = gameTime--;
            timer.textContent = updateTimer;
        }
        else {
            clearInterval(interval);
            bubbles_container.innerHTML = `<h1 id="game_over">GAME OVER<br>Your score: ${count}</h1>
                                            <button onclick=newGame() id="new_game">New Game </button>`
        }
    }, 1000);
}

// Update the score
let count = 0;
function updateScore() {
    count += 10;
    score.innerHTML = count;
}

// Game mechanism
function play() {
    bubbles_container.addEventListener("click", (e) => {
        clickedNum = Number(e.target.innerHTML);
        if (clickedNum == randomNum) {
            updateScore();
            randomHitNumber();
            bubbles_container.innerHTML = "";
            makeBubbles();
        }

    })
}

// New game
function newGame() {
    clearInterval(interval);
    gameTime = 60;
    count = 0;
    score.textContent = count;
    randomHitNumber();
    bubbles_container.innerHTML = "";
    makeBubbles();
    timeUpdate();

}

// Refresh button
refresh1.addEventListener("click", () => {
    newGame();
})

refresh2.addEventListener("click", () => {
    bubbles_container.innerHTML = "";
    makeBubbles();
})

makeBubbles();
timeUpdate();
play();
randomHitNumber();