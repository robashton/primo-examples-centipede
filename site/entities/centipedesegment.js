var _ = require('underscore')

var Primo = require('primo')
var Animation = require('primo-animation')
var RigidBody = require('primo-physics').RigidBody

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
    this.entity.scene.spawnEntity( DeadSegment, { x: this.entity.x, y: this.entity.y } )
    if(Math.random() < 0.3) {
      var self = this
      setTimeout(function() {
          self.entity.scene.spawnEntity( Rock, { x: self.entity.x, y: self.entity.y } )
      }, 1000)
    }
  }
}

module.exports =  Primo.DefineEntity(function(id, data) {
  this.width = 8
  this.height = 8
  this.attach(new Trailer(this, data.head, data.index))
  this.attach(new RigidBody(this, { group: 'centipede'  }))
  this.attach(new Animation(this, 'media/centipede.png', 5, 5))
    .define( 'walkleft', 0.1, [12,13])
    .define( 'walkright', 0.1, [12,13])
    .define( 'walkdown', 0.1, [10,11])
    .define( 'walkup', 0.1, [10,11])
})

