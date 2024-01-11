let elements = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

function addPoints(person){
  if(person == "player"){
    playerPoints++;
    document.querySelector(".player-score").innerText = "Player: " + playerPoints;
  } else {
    computerPoints++;
    document.querySelector(".computer-score").innerText = "Computer: " + computerPoints;
  }
  document.getElementById("play-again").style.display = "block";
}


document.getElementById("play-again").addEventListener("click", () => {
  document.getElementById("play-again").innerText = "Play again";
  document.getElementById("play-again").style.display = "none"
  document.getElementById("countdown").innerText = 10;
  let count = 10;
  const timer = setInterval(() => {
    count--;
    document.getElementById("countdown").innerText = count;
    if (count === 0) {
      clearInterval(timer);
      alert("Time is up");
      addPoints("computer");
    }
  }, 1000);

  let computerChoice = elements[Math.floor(Math.random() * 3)];

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", (e) => {
      let element = e.target.id;

      if (computerChoice == element) {
        alert("Draw!");
        addPoints("computer");
        addPoints("player");
        clearInterval(timer);
        computerChoice = "";
        return;
      }

      if (element == "rock") {
        if (computerChoice == "paper") {
          alert("You lose!");
          addPoints("computer");
        } else if (computerChoice == "scissors") {
          alert("You win!");
          addPoints("player");
        }
        computerChoice = "";
        clearInterval(timer);
        return;
      } else if (element == "scissors") {
        if (computerChoice == "paper") {
          alert("You win!");
          addPoints("player");
        } else if (computerChoice == "rock") {
          alert("You lose!");
          addPoints("computer");
        }
        computerChoice = "";
        clearInterval(timer);
        return;
      } else if (element == "paper") {
        if (computerChoice == "scissors") {
          alert("You lose!");
          addPoints("computer");
        } else if (computerChoice == "rock") {
          alert("You win!");
          addPoints("player");
        }
        clearInterval(timer);
        computerChoice = "";
        return;
      }
    });
  });
});
