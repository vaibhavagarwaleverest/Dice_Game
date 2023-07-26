const newGameButton = document.getElementById("new-game");
const rollButton = document.getElementById("roll-a-dice");

if (newGameButton) {
  newGameButton.addEventListener("click", () => handleJSBtnClick(rollButton));
}
const handleJSBtnClick = (jsDisableButton) => {
  jsDisableButton.disabled = false;
  console.log("Player 1 Start First");
  document.getElementById("comments").innerHTML = "Player 1 Start First";
  player1_chance = true;
  player1_Total_score = 0;
  player1_current_score = 0;
  player2_chance = false;
  player2_current_score = 0;
  player2_Total_score = 0;
  document.getElementById("total1").innerHTML = 0;
  document.getElementById("current1").innerHTML = 0;
  document.getElementById("total2").innerHTML = 0;
  document.getElementById("current2").innerHTML = 0;
  document.getElementById("player1").style.backgroundColor = "#e6abbd";
};
const handleJSBtnClick1 = (jsDisableButton) => {
  jsDisableButton.disabled = true;
  console.log("Start New Game");
};
document.getElementById("roll-a-dice").addEventListener("click", roll_a_dice);
let player1_chance = true;
let player1_Total_score = 0;
let player1_current_score = 0;
let player2_chance = false;

let player2_current_score = 0;
let player2_Total_score = 0;

function roll_a_dice() {
  const rndInt = randomIntFromInterval(1, 6);
  console.log(rndInt);
  if (player1_chance) {
    if (rndInt != 1) {
      document.getElementById("comments").innerHTML =
        "Player 1 got a score of : " + rndInt;
      document.getElementById("player1").style.backgroundColor = "#e6abbd";
      player1_current_score += rndInt;
      document.getElementById("current1").innerHTML = player1_current_score;
      console.log(player1_current_score);
    } else {
      player1_Total_score += player1_current_score;
      player1_current_score = 0;
      document.getElementById("total1").innerHTML = player1_Total_score;
      document.getElementById("current1").innerHTML = player1_current_score;
      document.getElementById("comments").innerHTML = "Player 2 got a chance";
      document.getElementById("player1").style.backgroundColor = "#e8d2da";

      document.getElementById("player2").style.backgroundColor = "#e6abbd";

      if (player1_Total_score >= 100) {
        console.log("player 1 win");
        document.getElementById("comments").innerHTML =
          "Hurray!🥇 Player 1 Win";
        handleJSBtnClick1(rollButton);
      }
      player2_chance = true;
      player1_chance = false;
    }
  } else if (player2_chance) {
    if (rndInt != 1) {
      player2_current_score += rndInt;
      document.getElementById("comments").innerHTML =
        "Player 2 got a score of : " + rndInt;
      document.getElementById("current2").innerHTML = player2_current_score;
      document.getElementById("player2").style.backgroundColor = "#e6abbd";
      document.getElementById("player1").style.backgroundColor = "#e8d2da";

      console.log(player2_current_score);
    } else {
      player2_Total_score += player2_current_score;
      player2_current_score = 0;
      document.getElementById("total2").innerHTML = player2_Total_score;
      document.getElementById("current2").innerHTML = player2_current_score;
      document.getElementById("comments").innerHTML = "Player 1 got a chance";
      document.getElementById("player1").style.backgroundColor = "#e6abbd";
      document.getElementById("player2").style.backgroundColor = "#e8d2da";

      if (player2_Total_score >= 100) {
        console.log("Player 2 win");
        document.getElementById("comments").innerHTML =
          "Hurray!🥇 Player 2 Win";
        handleJSBtnClick1(rollButton);
      }

      player1_chance = true;
      player2_chance = false;
    }
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
