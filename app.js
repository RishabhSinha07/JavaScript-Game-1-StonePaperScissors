const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playButton = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playButton.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const compuerChoice = computerOptions[computerNumber];

        comparehands(this.textContent, compuerChoice);
        updateScore();

        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${compuerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const comparehands = (PlayerChoice, ComputerChoice) => {
    const winner = document.querySelector(".winner");
    if (PlayerChoice === ComputerChoice) {
      winner.textContent = "Draw";
      return;
    }
    if (PlayerChoice === "rock") {
      if (ComputerChoice === "scissors") {
        pScore++;
        winner.textContent = "player wins";
        return;
      } else {
        cScore++;
        winner.textContent = "compuer wins";
        return;
      }
    }

    if (PlayerChoice === "paper") {
      if (ComputerChoice === "rock") {
        pScore++;
        winner.textContent = "player wins";
        return;
      } else {
        cScore++;
        winner.textContent = "compuer wins";
        return;
      }
    }

    if (PlayerChoice === "scissors") {
      if (ComputerChoice === "paper") {
        pScore++;
        winner.textContent = "player wins";
        return;
      } else {
        cScore++;
        winner.textContent = "compuer wins";
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();
