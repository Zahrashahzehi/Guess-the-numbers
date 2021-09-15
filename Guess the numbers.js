const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const massage = document.querySelector(".massege");
let gamePlay   = false;
let score      = 0;
button.addEventListener("click" , function(){
    if(!gamePlay){
        gamePlay = true;
        gameArea.innerHTML = "";
        score=0;
        maker();
        button.innerHTML = "check Combo";
        massage.innerHTML = "Gussess the Comba";
    }
    else{
        const numbers = document.querySelectorAll(".numb");
        score++;
        massage.innerHTML = "Guesess"  + score;
        let WinCandition = 0;
        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i].value == numbers[i].correct) {
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                WinCandition++;
            } else {
                let color = (numbers[i].value < numbers[i].correct) ? "blue" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "black";

            }
            if(WinCandition == numbers.length)
            {
                gameEnd();
                
            }

        }
    }
});
function gameEnd(){
    massage.innerHTML = "you solved the Comba in " + score + "  Guess . ";
    gamePlay = false;
    button.innerHTML = "Restart Game";
}
function maker(){
    for(let x=0 ; x<4; x++){
        let el = document.createElement("input");
    el.setAttribute("type" ,"number");
    el.max = 9 ;
    el.min = 0 ;
    el.size = 1;
    el.correct = Math.floor(Math.random()*10);
    el.style.width = "50px";
    el.classList.add("numb");
    el.value = 0;
    el.order = x;
    gameArea.appendChild(el);
    }
}