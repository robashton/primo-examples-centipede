var Entity = require('primo/lib/entity')
var Animation = require('primo/lib/components/animation')
var TimedRemoval = require('../components/timedremoval')

module.exports = Entity.Define(function(id, data) {
  this.width = 8
  this.height = 8
  this.attach(new TimedRemoval(this, 1))
  this.attach(new Animation(this, 'media/centipede.png', 8,8))
    .define('idle', 0.2, [10, 15, 16, 17, 18, 19])
})
