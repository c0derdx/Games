var dinosaur = document.querySelector(".dinosaur");
var body = document.getElementById("body");
body.addEventListener("keypress" , function game() {
    dinosaur.classList.add("jump");
});

setInterval(function game() {
    dinosaur.classList.remove("jump");
}, 300);