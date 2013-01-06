define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('game/components/animation')
  var Controller = require('game/components/controller')

  var Player = Entity.Define(function(id, data) {
    this.attach(new Animation(this, '/media/dancing.png', 16, 16, 15, [0,1]))
    this.attach(new Controller(this))
    this.width = 10
    this.height = 10
  })

  return Player
})
