$(document).ready(function() {
  let wins = 0;
  let losses = 0;
  let gameFinished = false;
  let total = 0;
  let target = 0;

  function randomNumber(min, max) {
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
  }

  function winningNumber() {
    target = randomNumber(19, 120);
    $("#target").text(target);
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
    $("#gameWin").hide();
    $("#gameOver").hide();
    // $("#container").hide();
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

  $("#newGame").click(function() {
    newGame();
  });

  $("#resetGame").click(function() {
    resetGame();
  });

  function playSound(id) {
    const sound = document.getElementById(id);
    sound.play();
  }

  $(".btn").click(function() {
    if (gameFinished) {
      return;
    } else {
      total += parseInt($(this).val());
      playSound("btn");
      checkWin();
      updateDisplay();
    }
  });

  function lose() {
    $("#gameOver")
      .show(50)
      .delay(4000)
      .hide(50);
  }

  function gameOver() {
    gameFinished = true;
    losses++;
    playSound("loseAudio");
    $("#container")
      .hide(50, lose())
      .delay(4000)
      .show(50);
  }

  function win() {
    $("#gameWin")
      .show(50)
      .delay(4000)
      .hide(50);
  }

  function gameWin() {
    gameFinished = true;
    wins++;
    playSound("winAudio");
    $("#container")
      .hide(50, win())
      .delay(4000)
      .show(50);
  }

  function checkWin() {
    if (total === target) {
      gameWin();
      return;
    } else if (total > target) {
      gameOver();
      return;
    }
  }
  resetGame();
});
