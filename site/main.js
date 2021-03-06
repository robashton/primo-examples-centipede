var Primo = require('primo')
var CentipedeGame = require('./centipedegame')
var physics = require('primo-physics')


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
    game.restart()
    game.on('game-over', showGameOver)
  }

  function startGame() {
    // Resize the canvas?
    var canvas = document.getElementById('canvas')
    canvas.width = $game.width() //canvas.parentNode.clientWidth
    canvas.height = $game.width() * 3/4 //$game.height() //canvas.parentNode.clientHeight

    var runner = Primo.Create('canvas')
    game = new CentipedeGame(runner)
    runner.on('init', function() {
      game.start()
      physics.init(runner)
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
