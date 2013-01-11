define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')
  var TimedRemoval = require('../components/timedremoval')

  return Entity.Define(function(id, data) {
    this.width = 8
    this.height = 8
    this.attach(new TimedRemoval(this, 1))
    this.attach(new Animation(this, 'media/centipede', 8,8))
      .define('idle', 0.2, [10, 15, 16, 17, 18, 19])
  })

})
