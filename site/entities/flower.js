var Primo = require('primo')
var Animation = require('primo-animation')
var RigidBody = require('primo-physics').RigidBody

module.exports = Primo.DefineEntity(function(id, data) {
  this.width = 6
  this.height = 6
  this.attach(new RigidBody(this, { weight: 0 }))
  this.attach(new Animation(this, 'media/flower.png', 5, 1 ))
    .define('idle', 0.5, [ 0, 1, 2, 3, 4 ])
})
