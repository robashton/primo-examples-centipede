var Primo = require('primo')
var FloatingText = require('./floatingtext')

module.exports = Primo.DefineEntity(function(id, data) {
  this.messages = []
  var scene = this.scene
  this.scene.on('level-changed', function(level) {
    scene.spawnEntity(FloatingText, 
      { x: 160, y: 120, text: 'Level ' + level, time: 2})
  })
  this.scene.on('score-changed', function(ev) {
    scene.spawnEntity(FloatingText, 
      { x: ev.x, y: ev.y, text: ev.amount, time: 2})
  })
})
