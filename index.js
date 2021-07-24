var body = document.getElementById("body");
var scoreCard = document.querySelector(".score__card");
var grid = document.querySelector(".grid");

var character__div = document.querySelector(".character__div");
var character = document.querySelector(".character");

var i = 0;
var isgameOver;
var score;

var playBtn = document.querySelector(".play__btn");
playBtn.addEventListener("click" , startGame)
function startGame() {
    playBtn.style.display = "none";
    score = 0;
    isgameOver = false;
    character.src = "captainamerica__running.gif";
    scoreRunner();
    generator();

}

function scoreRunner() {
    if (!isgameOver) {
        score++;
        scoreCard.innerHTML = score;
        setTimeout(scoreRunner, 300);
    }
    else {
        scoreCard.innerHTML = "0";
    }
}

function jump() {
    if (character__div.style.bottom == 0) {
        character__div.classList.add("jump");
        character.src = "captainamerica__standing.png";
        
        setTimeout(function gravity() {
            character__div.classList.remove("jump");
            character.src = "captainamerica__running.gif";
        }, 600);
    }
}

body.addEventListener("keypress" , jump);

function gameOver(box) {
    console.log("gameOver");
    setInterval(() => {
        cx = parseInt(window.getComputedStyle(character__div, null).getPropertyValue("left"));
        cy = parseInt(window.getComputedStyle(character__div, null).getPropertyValue("bottom"));
        
        dx = parseInt(window.getComputedStyle(box, null).getPropertyValue("left"));
        dy = parseInt(window.getComputedStyle(box, null).getPropertyValue("bottom"));
        
        distanceX = Math.abs(cx-dx);
        distanceY = Math.abs(cy-dy);
    
        if (distanceX<80 && distanceY<20) {
            alert("gameOver");
            while (grid.firstChild) {
                grid.removeChild(grid.firstChild);
                console.log("In while loop")
            }
            isgameOver = true;
            i = 0;
            playBtn.style.display = "block";
        }
    
    }, 100);
}

function generator() {
    
    var randomTime = [1000,1500,2000];
    var random = Math.floor(Math.random()*3);
    if (!isgameOver) {
        console.log(random);
        let box = document.createElement("div");
            grid.appendChild(box);
            let r = "remove" + i;
            box.classList.add(r,"box");
            gameOver(box);
            let fuck = document.getElementsByClassName(r);
            box.animationend = remov(fuck);
            i++;
            setTimeout(generator, randomTime[random]);
    }
}

function remov(fuck) {
    if (i>6) {
        grid.removeChild(grid.firstChild);
    }
        
}