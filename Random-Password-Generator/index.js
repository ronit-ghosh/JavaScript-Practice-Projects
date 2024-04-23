function generatePassword() {
    const length = Number(document.querySelector("#length").value);
    const lowercase = document.querySelector("#lowercase").checked;
    const uppercase = document.querySelector("#uppercase").checked;
    const numeric = document.querySelector("#numeric").checked;
    const symbols = document.querySelector("#symbol").checked;
    const printAns = document.querySelector(".password");

    const pass = randomPass(length, lowercase, uppercase, numeric, symbols);

    if (!lowercase && !uppercase && !numeric && !symbols) {
        printAns.textContent = "Please check at least one option";
        return; // Stop execution
    }

    printAns.textContent = pass;
}

//Random Password Funtion
function randomPass(length, lowercase, uppercase, numeric, symbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericalChars = "1234567890";
    const symbolChars = "@#$%&*!?><(){}";

    let allowedChars = "";
    let password = "";

    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numeric ? numericalChars : "";
    allowedChars += symbols ? symbolChars : "";

    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[random];
    }

    return password;
}

// --COPY PASSWORD BUTTON--
function copyPassword() {
    const passwordField = document.querySelector(".password");
    const password = passwordField.textContent;

    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = password;
    document.body.appendChild(tempTextarea);

    tempTextarea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextarea);

    alert("Password copied to clipboard!");
}
