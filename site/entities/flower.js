var Primo = require('primo')
var Animation = require('primo-animation')
var RigidBody = require('primo-rigidbody')

module.exports = Primo.DefineEntity(function(id, data) {
  this.width = 6
  this.height = 6
  this.attach(new RigidBody(this, { weight: 0 }))
  this.attach(new Animation(this, 'media/flower.png', 6, 6 ))
    .define('idle', 0.5, [ 0, 1, 2, 3, 4 ])
})
