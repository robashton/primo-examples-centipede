var _ = require('underscore')
var Entity = require('primo-core/lib/entity')
var Animation = require('primo-core/lib/components/animation')
var RigidBody = require('primo-core/lib/components/rigidbody')

var DeadSegment = require('./deadsegment')
var Rock = require('./rock')

var Trailer = function(entity, head, index) {
  this.entity = entity
  this.head = head
  this.index = index
  this.direction = ''
  this.entity.handle('hitbybullet', _.bind(this.hitByBullet, this))
  this.entity.on('killed', this.onKilled, this)
}

Trailer.prototype = {
  tick: function() {
    this.calculatePosition()
    this.entity.dispatch('set-animation', 'walk' + this.direction)
  },
  calculatePosition: function() {
    var position = this.head.getPositionForSegment(this.index)
    this.entity.x = position.x
    this.entity.y = position.y
    this.direction = position.direction
  },
  hitByBullet: function() {
    this.head.damage()
  },
  onKilled: function() {
    this.entity.game.spawnEntity( DeadSegment, { x: this.entity.x, y: this.entity.y } )
    if(Math.random() < 0.3) {
      var self = this
      setTimeout(function() {
          self.entity.game.spawnEntity( Rock, { x: self.entity.x, y: self.entity.y } )
      }, 1000)
    }
  }
}

module.exports =  Entity.Define(function(id, data) {
  this.width = 8
  this.height = 8
  this.attach(new Trailer(this, data.head, data.index))
  this.attach(new RigidBody(this, { group: 'centipede'  }))
  this.attach(new Animation(this, 'media/centipede.png', 8, 8, 0.1, [12,13]))
    .define( 'walkleft', 0.1, [12,13])
    .define( 'walkright', 0.1, [12,13])
    .define( 'walkdown', 0.1, [10,11])
    .define( 'walkup', 0.1, [10,11])
})

