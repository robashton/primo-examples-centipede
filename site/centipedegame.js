var Eventable = require('primo-events')
  , _ = require('underscore')
  , Flower = require('./entities/flower')
  , Rock = require('./entities/rock')
  , CentipedeHead = require('./entities/centipedehead')
  , DefenceUnit = require('./entities/defenceunit')
  , Messaging = require('./entities/messaging')
  , ScoreKeeper = require('./entities/scorekeeper')
  , SoundWatcher = require('./entities/audio')

var CentipedeGame = function(game) {
  Eventable.call(this)
  this.game = game
  this.width = 320
  this.height = 240
  this.game.scene.camera.setViewport(0, 0, this.width,this.height)
  this.scene = this.game.scene
  this.game.input.bind(this.game.input.LEFT_ARROW, "left")
  this.game.input.bind(this.game.input.RIGHT_ARROW, "right")
  this.game.input.bind(this.game.input.DOWN_ARROW, "down")
  this.game.input.bind(this.game.input.UP_ARROW, "up")
  this.hookTouchInput()
}
CentipedeGame.prototype = {
  hookTouchInput: function() {
    var self = this
    $('#game').touchwipe({
       wipeLeft: function(e) {
        self.head.moveLeft()
       },
       wipeUp: function() {
        self.head.moveDown()
       },
       wipeDown: function() {
        self.head.moveUp()
       },
       wipeRight: function() {
        self.head.moveRight()
      },
      preventDefaultEvents: true
    })
  },
  restart: function() {
    this.game.reset()
    this.start()
  },
  start: function() {
    for(var i = 0; i < 10 ; i++) 
      this.spawnRock(Math.random() * 270 + 25, Math.random() * 180 + 30)
    var head = this.game.scene.spawnEntity(CentipedeHead, { x: 0, y: 0 })
    this.head = head
    this.scene.spawnEntity(DefenceUnit, { x: 0, y: 218, head: head })
    this.messaging = this.scene.spawnEntity(Messaging)
    this.scorekeeper = this.scene.spawnEntity(ScoreKeeper)
    this.sounds = this.scene.spawnEntity(SoundWatcher)
    this.scene.on('player-died', this.onPlayerDied, this)
    this.scene.on('flower-eaten', this.onFlowerEaten, this)
    this.startLevel(1)
  },
  startLevel: function(level) {
    this.level = level
    this.flowercount = 5
    this.spawnFlower()
    this.scene.raise('level-changed', level)
  },
  spawnFlower: function() {
    this.game.scene.spawnEntity(Flower, {
        x: Math.random() * 270 + 25,
        y: Math.random() * 180 + 20
      }
    )
  },
  spawnRock: function(x, y) {
    this.game.scene.spawnEntity(Rock, {x: x, y: y})
  },
  onPlayerDied: function() {
    this.raise('game-over', this.scorekeeper.getStats())
    this.enabled = false
  },
  onFlowerEaten: function(flower) {
    if(--this.flowercount <= 0) 
      this.startLevel(this.level+1)
    else 
      this.spawnFlower()
    var self = this
    if(Math.random() > 0.3)
      setTimeout(function() {
        self.spawnRock(flower.x, flower.y)
      }, 3000)
  }
}
_.extend(CentipedeGame.prototype, Eventable.prototype)

module.exports = CentipedeGame
