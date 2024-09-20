let msgchange = document.querySelector("#msg");
let msgchangeContainer = document.querySelector(".msg-container")
let userCount = document.querySelector("#user-score");
let compCount = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;
let userWin = true;

let choices = document.querySelectorAll(".choice");

const genCompChoic = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const showWinner = (userWin) => {
    if (userWin == true) {
        userScore++;
        userCount.innerText = userScore;
        msgchange.innerText = "You Win";
        msgchangeContainer.style.backgroundColor = "green";

    } else {
        compScore++;
        compCount.innerText = compScore;
        msgchange.innerText = "You Lose";
        msgchangeContainer.style.backgroundColor = "red";
        

    }
}



const playgame=(userChoice)=>{
    const compChoice = genCompChoic();
    console.log(`userchoice ${userChoice} Comp choice ${compChoice}`)
    if(userChoice === compChoice){
        msgchange.innerText = "Match Draw";
        msgchangeContainer.style.backgroundColor = "#2D2D34";
    } else {
        
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false : true;

        } else if (userChoice === "paper"){
            
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false :true;
        }
        console.log(userScore,compScore)
        showWinner(userWin);
    }
    

}


choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})