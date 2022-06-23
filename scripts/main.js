let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.svg") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.svg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let userName = prompt("Please enter your name: ", "Name");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("userName", userName);
        myHeading.textContent = "Mozilla is cool, " + userName;
    }
}

if (!localStorage.getItem("userName")) {
    setUserName();
} else {
    let userName = localStorage.getItem("userName");
    myHeading.textContent = "Mozilla is cool, " + userName;
}

myButton.onclick = function () {
    setUserName();
}
