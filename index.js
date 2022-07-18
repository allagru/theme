let theme = document.querySelector("#theme");
let body = document.querySelector("body");
let text = document.querySelector(".text");

theme.onchange = changeTheme;

function changeTheme() {
    switch (theme.value) {
        case "white": body.style.backgroundColor = "white"; 
        text.style.color = "rgb(84, 94, 94)";
        body.style.color = "black";
        break;
        case "red": body.style.backgroundColor = "rgb(198, 56, 56)"; 
        text.style.color = "rgb(69, 3, 3)";
        body.style.color = "black";
        break;
        case "black": body.style.backgroundColor = "black"; 
        body.style.color = "white";
        text.style.color = "rgb(84, 94, 94)";
        break;
        case "blue": body.style.backgroundColor = "rgb(3, 18, 156)"; 
        body.style.color = "black";
        text.style.color = "rgb(60, 197, 197)";
        break;
    }
}