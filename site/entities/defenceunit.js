var Entity = require('primo-core/lib/entity')
var Animation = require('primo-core/lib/components/animation')
var Bullet = require('./bullet')

var DefenceUnit = function(entity, target) {
  this.entity = entity
  this.speed = 1.0
  this.bulletSpeed = 40
  this.firingTicks = 0
  this.firingRate = 250
  this.accuracyTolerance = 50
  this.target = target
  this.entity.scene.on('level-changed', this.onLevelChanged, this)
  this.firingStrategies = [
    function() {
      this.entity.scene.spawnEntity(Bullet, {
        x: this.entity.x,
        y: this.entity.y, 
        speed: this.bulletSpeed
      }) 
    }, 
    function() {
      var count = 5
      var self = this
      var fire = function() {
        self.entity.scene.spawnEntity(Bullet, {
          x: self.entity.x,
          y: self.entity.y, 
          speed: self.bulletSpeed
        })
        if(count-- > 0)
          setTimeout(fire, 1000)
      }
      fire() 
    }, 
    function() {
      for(var i = 0 ; i < 10; i++) {
        this.entity.scene.spawnEntity(Bullet, {
          x: this.entity.x,
          y: this.entity.y, 
          speed: this.bulletSpeed,
          spread: (5 - i) * 2.0
        })
      }
    }]
}

DefenceUnit.prototype = {
  tick: function() {
    this.updateFiringTicks()
    this.updateVelocity()
    if(Math.abs(this.target.x - this.entity.x) < this.accuracyTolerance)
      this.tryFire()
  },
  updateVelocity: function() {
    if(this.target.x < this.entity.x)
      this.entity.velx = -this.speed
    else if(this.target.x > this.entity.x)
      this.entity.velx = this.speed
    else
      this.entity.velx = 0
  },
  updateFiringTicks: function() {
    if(this.firingTicks !== 0) {
      this.firingTicks++
    if(this.firingTicks % this.firingRate === 0)
      this.firingTicks = 0
    }
  },
  tryFire: function() {
    if(this.firingTicks === 0) {
      this.firingTicks++
      this.fire()
    }
  },
  fire: function() {
    var strategy = this.firingStrategies[
      Math.floor(Math.random() * this.firingStrategies.length)
    ]
    strategy.call(this)
  },
  onLevelChanged: function(level) {
    this.bulletSpeed = 40 + (level*5)
    this.firingRate = Math.floor(Math.max(80 - (level * 5), 15))
    this.speed = 25 + level*2
    this.accuracyTolerance = 30 + (level * 5)
  }
}

module.exports = Entity.Define(function(id, data) {
  this.width = 8
  this.height = 8
  this.attach(new DefenceUnit(this, data.head))
  this.attach(new Animation(this, 'media/defenceunit.png', 8, 8))
    .define('idle', 10, [0])
})

