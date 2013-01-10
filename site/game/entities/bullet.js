define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')
  var Bullet = require('engine/components/bullet')
  var util = require('engine/commons')

  return Entity.Define(function(id, data){
    this.width = 4
    this.height = 4
    this.attach(new Bullet(this))
    this.attach(new Animation(this, 'media/bullet.png', 4, 4))
      .define('idle', 0.1, [0, 1, 2])
    this.velx = util.valueOrDefault(data.spread, 0)
    this.vely = -data.speed
  })
})
