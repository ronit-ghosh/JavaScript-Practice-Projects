function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let html = `<div class="card">
        <div class="thumbnail">
            <img src="${thumbnail}" alt="">
            <span>${duration}</span>
        </div>

        <div class="text">
            <p>${title}</p>
            <span>${cName}</span>
            <span>${views}</span>
            <span>${monthsOld} months old</span>
        </div>
    </div>`;

    document.querySelector(".container").innerHTML = html;

}


createCard("Introduction to Frontend | Sigma Web Dev video #2", "CodeWithHarry", "50K", 7, "31:02", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBenW1M30gqWfrb8bLNydwUJiebEA")