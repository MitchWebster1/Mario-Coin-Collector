$(document).ready(function() {
  let wins = 0;
  let losses = 0;
  let gameFinished = false;
  let total = 0;
  let target = 0;
  let feedback = "";

  function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
  }

  function updateDisplay() {
    $("#total").text(total);
    $("#wins").text(wins);
    $("#losses").text(losses);
  }
  function resetGame() {
    wins = 0;
    losses = 0;
    total = 0;
    newGame();
    updateDisplay();
  }

  function newGame() {
    winningNumber();
    $("#red").val(randomNumber(1, 12));
    $("#blue").val(randomNumber(1, 12));
    $("#yellow").val(randomNumber(1, 12));
    $("#green").val(randomNumber(1, 12));
    updateDisplay();
  }
  function winningNumber() {
    target = randomNumber(19, 120);
    $("#target").text(target);
  }

  $(".btn").click(function() {
    if (gameFinished) {
      return;
    } else {
      total += parseInt($(this).val());
      checkWin();
      updateDisplay();
      console.log(total);
      console.log(target);
    }
  });

  $("#newGame").click(function() {
    newGame();
  });

  function checkWin() {
    if (total === target) {
      gameFinished = true;
      feedback = "Congratulations you won!";
      wins++;
      return;
    } else if (total > target) {
      gameFinished = true;
      feedback = "Sorry you lost try again!";
      losses++;
      return;
    }
  }
  resetGame();
});
