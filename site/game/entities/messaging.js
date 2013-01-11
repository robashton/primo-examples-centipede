define(function(require) {
  var Entity = require('engine/entity')
  var FloatingText = require('./floatingtext')
  
  return Entity.Define(function(id, data) {
    this.messages = []
    var game = this.game
    this.game.on('level-changed', function(level) {
      game.spawnEntity(FloatingText, 
        { x: 160, y: 120, text: 'Level ' + level, time: 2})
    })
    this.game.on('score-changed', function(ev) {
      game.spawnEntity(FloatingText, 
        { x: ev.x, y: ev.y, text: ev.amount, time: 2})
    })
  })
})
