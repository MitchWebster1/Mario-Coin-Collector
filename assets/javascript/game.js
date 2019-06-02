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
    total = 0;
    gameFinished = false;
    feedback = "";
    winningNumber();
    $("#btn1").val(randomNumber(1, 12));
    $("#btn2").val(randomNumber(1, 12));
    $("#btn3").val(randomNumber(1, 12));
    $("#btn4").val(randomNumber(1, 12));
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
    }
  });

  $("#newGame").click(function() {
    newGame();
  });

  $("#resetGame").click(function() {
    resetGame();
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
