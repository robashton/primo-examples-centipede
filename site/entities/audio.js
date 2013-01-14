var Primo = require('primo')

module.exports = Primo.DefineEntity(function(id, data) {
    
  var hurt = this.game.resources.sound('media/hurt')
  var fire = this.game.resources.sound('media/fire')
  var pickup = this.game.resources.sound('media/pickup')

  this.scene.on('player-damaged', function() {
    hurt.play()
  })
  this.scene.on('bullet-fired', function() {
    fire.play()
  })
  this.scene.on('flower-eaten', function() {
    pickup.play()
  })
})

