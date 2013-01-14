var Entity = require('primo-core/lib/entity')
var Animation = require('primo-core/lib/components/animation')
var RigidBody = require('primo-core/lib/components/rigidbody')

var Shrinker = require('../components/shrinker')

module.exports = Entity.Define(function() {
  this.width = 12
  this.height = 12
  this.rockType = 0
  this.attach(new RigidBody(this, { weight: Infinity, group: 'rock' }))
  this.attach(new Shrinker(this, [12, 8, 4]))
  this.attach(new Animation(this, 'media/rock.png', 12, 12))
    .define( 'idle', 10, [0])
  this.on('killed', function() { 
    this.raise('rock-destroyed', this)
  }, this)
})

