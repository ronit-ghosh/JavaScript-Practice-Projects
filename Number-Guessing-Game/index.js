const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = prompt(`Guess a number between ${min} to ${max}`);
    guess = Number(guess);

    if (isNaN(guess)){
        alert("Enter a Valid Number...");
    }
    else if(guess > max || guess < min){
        alert(`Enter a Number between ${min} - ${max}...`);
    }
    else{
        attempts++;
        if(guess > answer){
            alert("Your Guess is Higher! Try Again!");
        }
        else if(guess < answer){
            alert("Your Guess is Lower! Try Again!");
        }
        else{
            alert(`You Guessed it Right, the Number was ${answer}, and it took you ${attempts} attempts to Guess it Right`);
            running = false;
        }
    }
}

