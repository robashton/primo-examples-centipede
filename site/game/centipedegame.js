define(function(require) {
  var Eventable = require('eventable')
    , _ = require('underscore')
    , Flower = require('./entities/flower')
    , Rock = require('./entities/rock')

  var CentipedeGame = function(game) {
    Eventable.call(this)
    this.game = game
    this.game.on('player-died', this.onPlayerDied, this)
    this.game.on('flower-eaten', this.onFlowerEaten, this)
    this.width = 320
    this.height = 240
    this.game.camera.createViewport(0, 0, this.width,this.height)
  }
  CentipedeGame.prototype = {
    restart: function() {
      this.game.clear()
      this.start()
    },
    start: function() {
      this.startLevel(1)
      for(var i = 0; i < 10 ; i++) 
        this.spawnRock(Math.random() * 270 + 25, Math.random() * 180 + 30)
    },
    startLevel: function(level) {
      this.level = level
      this.flowercount = 5
      this.spawnFlower()

    },
    spawnFlower: function() {
      this.game.spawnEntity(Flower, {
          x: Math.random() * 270 + 25,
          y: Math.random() * 180 + 20
        }
      )
    },
    spawnRock: function(x, y) {
      this.game.spawnEntity(Rock, {x: x, y: y})
    },
    onPlayerDied: function() {
      this.raise('game-over')
      this.enabled = false
    },
    onFlowerEaten: function(flower) {
      if(--this.flowercount <= 0) 
        this.startLevel(this.level++)
      else 
        this.spawnFlower()
      var self = this
      if(Math.random() > 0.3)
        setTimeout(function() {
          self.spawnRock(flower.pos.x, flower.pos.y)
        }, 3000)
    }
  }
  _.extend(CentipedeGame.prototype, Eventable.prototype)

      /*
      this.messaging = this.game.spawnEntity(EntityMessaging, 0,0)
      this.scorekeeper = this.game.spawnEntity(EntityScoreDisplay, 0, 0, {
        world: this.world
      })
      */
})
