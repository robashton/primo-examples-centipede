var Primo = require('primo')
var Animation = require('primo-animation')
var util = require('primo-utils')

var Bullet = require('../components/bullet')

module.exports = Primo.DefineEntity(function(id, data){
  this.width = 4
  this.height = 4
  this.attach(new Bullet(this))
  this.attach(new Animation(this, 'media/bullet.png', 5, 1))
    .define('idle', 0.1, [0, 1, 2])
  this.velx = util.valueOrDefault(data.spread, 0)
  this.vely = -data.speed
})
