function clock(){
    const hour = document.querySelector(".hours");
    const min = document.querySelector(".minutes");
    const sec = document.querySelector(".seconds");

    const now = new Date();
    let hours = now.getHours();
    let meridiem = hours>=12 ? "PM" : "AM";
    hours = hours%12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    
    hour.textContent = hours;
    min.textContent = minutes;
    sec.textContent = `${seconds} ${meridiem}`;

    //Background Color Change as Time changes
    if (hours >= 9 && meridiem === "AM"){
        document.body.style.backgroundColor = "rgb(241, 255, 240)"
    }
    else if (hours <= 6 && meridiem === "PM"){
        document.body.style.backgroundColor = "rgb(241, 255, 240)"
    }
    else {
        document.body.style.backgroundColor = "aliceblue"
    }
}

clock();
setInterval(clock, 1000);