let elements = ["rock", "paper", "scissors"];

document.getElementById("play-again").addEventListener("click", () => {
  document.getElementById("countdown").innerText = 10;
  let count = 10;
  const timer = setInterval(() => {
    count--;
    document.getElementById("countdown").innerText = count;
    if (count === 0) {
      clearInterval(timer);
      alert("Time is up");
    }
  }, 1000);

  let computerChoice = elements[Math.floor(Math.random() * 3)];

  document.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", (e) => {
      let element = e.target.id;

      if (computerChoice == element) {
        alert("Draw!");
        clearInterval(timer);
        return;
      }

      if (element == "rock") {
        if (computerChoice == "paper") {
          alert("You lose!");
        } else if (computerChoice == "scissors") {
          alert("You win!");
        }
        computerChoice = "";
        clearInterval(timer);
      } else if (element == "scissors") {
        if (computerChoice == "paper") {
          alert("You win!");
        } else if (computerChoice == "rock") {
          alert("You lose!");
        }
        computerChoice = "";
        clearInterval(timer);
      } else if (element == "paper") {
        if (computerChoice == "scissors") {
          alert("You lose!");
        } else if (computerChoice == "rock") {
          alert("You win!");
        }
        clearInterval(timer);
        computerChoice = "";
      }
    });
  });
});
