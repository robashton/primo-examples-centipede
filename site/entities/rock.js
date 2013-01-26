var Primo = require('primo')
var Animation = require('primo-animation')
var RigidBody = require('primo-physics').RigidBody

var Shrinker = require('../components/shrinker')

module.exports = Primo.DefineEntity(function() {
  this.width = 12
  this.height = 12
  this.rockType = 0
  this.attach(new RigidBody(this, { weight: Infinity, bounce: 0, group: 'rock' }))
  this.attach(new Shrinker(this, [12, 8, 4]))
  this.attach(new Animation(this, 'media/rock.png', 3, 1))
    .define( 'idle', 10, [0])
  this.on('killed', function() { 
    this.raise('rock-destroyed', this)
  }, this)
})

