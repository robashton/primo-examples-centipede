define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')
  var RigidBody = require('engine/components/rigidbody')
  var Shrinker = require('../components/shrinker')

  return Entity.Define(function() {
    this.width = 12
    this.height = 12
    this.rockType = 0
    this.attach(new RigidBody(this, { weight: Infinity, group: 'rock' }))
    this.attach(new Shrinker(this, [12, 8, 4]))
    this.attach(new Animation(this, 'media/rock.png', 12, 12))
      .define( 'idle', 10, [0])
  })

})
