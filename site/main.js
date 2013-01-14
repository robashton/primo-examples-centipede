var Runner = require('primo-core')
var CentipedeGame = require('./centipedegame')

var $start = $('#start')
  , $game = $('#game')
  , $gameover = $('#gameover')
  , $startbutton = $('#start')
  , $totalflowers = $('#total-flowers')
  , $totalrocks = $('#total-rocks')
  , $longeststreak = $('#longest-streak')
  , $finalscore = $('#final-score')
  , $restartbutton = $('#restart-button')
  , game = null

  $startbutton.on('click', startGame)
  $restartbutton.on('click', restartGame)

  function showSplash() {
    $start.show()
    $game.hide()
    $gameover.hide()
  }

  function showGameOver(stats) {
    $start.hide()
    $game.hide()
    $gameover.show()
    $totalflowers.text(stats.flowercount)
    $totalrocks.text(stats.rockcount)
    $longeststreak.text(stats.longeststreak)
    $finalscore.text(stats.score)
  }

  function restartGame() {
    $start.hide()
    $game.show()
    $gameover.hide()
    game.on('game-over', showGameOver)
  }

  function startGame() {
    var runner = new Runner('canvas')
    var game = new CentipedeGame(runner)
    runner.on('init', function() {
      game.start()
    })
    runner.start()
    $start.hide()
    $game.show()
    $gameover.hide()
    game.on('game-over', showGameOver)
  }

  function getParameterByName(name)
  {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if(!results)
    return "";
    else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  showSplash()
