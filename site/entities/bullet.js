var Entity = require('primo-core/lib/entity')
var Animation = require('primo-core/lib/components/animation')
var Bullet = require('primo-core/lib/components/bullet')
var util = require('primo-core/lib/commons')

module.exports = Entity.Define(function(id, data){
  this.width = 4
  this.height = 4
  this.attach(new Bullet(this))
  this.attach(new Animation(this, 'media/bullet.png', 4, 4))
    .define('idle', 0.1, [0, 1, 2])
  this.velx = util.valueOrDefault(data.spread, 0)
  this.vely = -data.speed
})
