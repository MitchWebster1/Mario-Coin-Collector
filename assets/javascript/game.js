$(document).ready(function () {
  let wins = 0
  let losses = 0
  let gameFinished = false
  let total = 0
  let target = 0

  // Random number generator that takes in your min and max number
  // that you would like to generate between.
  function randomNumber (min, max) {
    const number = Math.floor(Math.random() * (max - min) + min)
    return number
  }

  // Picks the target number for each game.
  function winningNumber () {
    target = randomNumber(19, 120)
    $('#target').text(target)
  }

  // Updates the display to keep all values current
  function updateDisplay () {
    $('#total').text(total)
    $('#wins').text(wins)
    $('#losses').text(losses)
  }

  // Resets all values to 0
  function resetGame () {
    wins = 0
    losses = 0
    total = 0
    newGame()
    updateDisplay()
    $('#gameWin').hide()
    $('#gameOver').hide()
  }

  // Generates a new target number and values for each button resets score
  function newGame () {
    total = 0
    gameFinished = false
    winningNumber()
    $('#btn1').val(randomNumber(1, 12))
    $('#btn2').val(randomNumber(1, 12))
    $('#btn3').val(randomNumber(1, 12))
    $('#btn4').val(randomNumber(1, 12))
    updateDisplay()
  }

  // Button click for newGame
  $('#newGame').click(function () {
    newGame()
  })

  // Button click for resetGame
  $('#resetGame').click(function () {
    resetGame()
  })

  // Plays sounds from the html element
  function playSound (id) {
    const sound = document.getElementById(id)
    sound.play()
  }

  // Button click takes value of whichever button is clicked and adds to total.
  // Is there a way to not use this here and not have to write a function for each button?
  $('.btn').click(function() {
    if (gameFinished) {
      
    } else {
      total += parseInt($(this).val())
      playSound('btn')
      checkWin()
      updateDisplay()
    }
  })

  // Hides the main screen and displays win or lose screen.
  function changeScreen (id) {
    $('#container')
      .hide(50)
      .delay(4000)
      .show(50)
    $(id)
      .show(50)
      .delay(4000)
      .hide(50)
  }

  // Checks total vs score to determine if game has been won or lost or to keep playing.
  function checkWin() {
    if (total === target) {
      gameFinished = true
      changeScreen('#gameWin')
      playSound('winAudio')
      wins++
      
    } else if (total > target) {
      gameFinished = true
      changeScreen('#gameOver')
      playSound('loseAudio')
      losses++
      return
    }
  }
  resetGame()
})
