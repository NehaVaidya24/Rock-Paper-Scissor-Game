let userScore = 0; // (first step )set userscore 0
let compScore = 0; // (first step)set userscore 0

const choices = document.querySelectorAll(".choice"); //(second step)access all the images(choice) elemets
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score"); // acess userscore
const compScorePara = document.querySelector("#comp-score");  //acess compscore



const genCompChoice = () => {   //(step 7) create new variable as gencompchoice 
  const options = ["rock", "paper", "scissors"]  //apply array method 
  const randIdx = Math.floor(Math.random() *3);  //apply methods like math.floor and math.random with * 3 because of we create three array to get a value between 0 to 2
  return options[randIdx]; //return and call the options with randIdx
};

const drawGame = () => {      //(step 10) create new variable as drawgame because we facing three conditon draw, loss and win
  msg.innerText = "Game was draw, Play Again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {    //(step 14) create new variable Showwinner and call the userwin userchoice and compchoice and apply if conditional statement and apply the styling and number increasing condition
  if(userWin) {
    userScore++; // after acessing userscore increment the numbers using ++
    userScorePara.innerText = userScore;
    msg.innerText = `You Won! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;  // after acessing userscore increment the numbers using ++
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {  //(step 6) create new variable as playgame and access userchoice
  const compChoice = genCompChoice();  //(step 8) comapare the compchoice and gencompchoice variable

  if(userChoice === compChoice) {   //(step 9)apply if else conditional statements for game start 
    drawGame();  //(step 11) call the drawgame variable
  } else {
    let userWin = true;  //(step 12) create new variable 
    if(userChoice === "rock") {    //(step 13) apply if else conditional statements
      userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice); // call the showwineer variable
  }
};

choices.forEach((choice) => {    //(step 3) allow forEach method for access all the elements
  choice.addEventListener("click", () => {   //(step 4) apply event handling method
  const userChoice = choice.getAttribute("id"); //(step 5) apply getAttribute method for getting attributes from the code (optional)
  playGame(userChoice);
  });
});