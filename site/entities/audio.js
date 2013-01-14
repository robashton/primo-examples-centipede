var Entity = require('primo-core/lib/entity')

module.exports = Entity.Define(function(id, data) {
    
  var hurt = this.game.resources.sound('media/hurt')
  var fire = this.game.resources.sound('media/fire')
  var pickup = this.game.resources.sound('media/pickup')

  this.game.on('player-damaged', function() {
    hurt.play()
  })
  this.game.on('bullet-fired', function() {
    fire.play()
  })
  this.game.on('flower-eaten', function() {
    pickup.play()
  })
})

