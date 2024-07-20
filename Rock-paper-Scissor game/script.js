let userscore = 0;
let compscore  = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");



function genCompChoice() {
    //rock,paper,scissor
    const options = ["Rock", "Paper", "Scissor"];
    const ranIndx = Math.floor(Math.random() * 3); //number will be from 0-2, we can give any any range after 
    return options[ranIndx];
}
const showWinner = (userWin,userChoice,compchoice) => {
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText =`YOU WIN!! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText  = `MF YOU LOSE!! ${compchoice} beats yours ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice)=>{ 
    console.log("User choice is", userChoice);
    const compchoice = genCompChoice();
    console.log("Computer choice is ", compchoice); 

    //game cond
    if(userChoice === compchoice){
        //Draw
        console.log("GAME WAS DRAW!!");
        msg.innerText = "GAME WAS DRAW. PLAY AGAIN!";
        msg.style.backgroundColor = "black";

    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            userWin = compchoice === "Paper"? false: true;
        } else if(userChoice === "Paper"){
            userWin = compchoice === "Scissor" ? false: true;
        } else(userChoice === "Scissor")
            userWin = compchoice ==="Rock" ?false :true;
        showWinner(userWin,userChoice,compchoice);  
        };
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

