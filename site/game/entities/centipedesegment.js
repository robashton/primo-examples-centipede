define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')

  var Trailer = function(entity, head, index) {
    this.entity = entity
    this.head = head
    this.index = index
    this.direction = ''
  }

  Trailer.prototype = {
    tick: function() {
      this.calculatePosition()
   // this.currentAnim = this.anims['walk' + this.direction]
    },
    calculatePosition: function() {
      var position = this.head.getPositionForSegment(this.index)
      this.entity.x = position.x
      this.entity.y = position.y
      this.direction = position.direction
    },
  }

  return Entity.Define(function(id, data) {
    this.width = 8
    this.height = 8
    this.attach(new Animation(this, 'media/centipede.png', 8, 8, 0.1, [12,13]))
    this.attach(new Trailer(this, data.head, data.index))
  })
})

/*
  init: function( x, y, settings ) {
      this.parent( x, y, settings );
      this.addAnim( 'walkleft', 0.1, [12,13]);
      this.addAnim( 'walkright', 0.1, [12,13]);
      this.addAnim( 'walkdown', 0.1, [10,11]);
      this.addAnim( 'walkup', 0.1, [10,11]);
      this.head = settings.head
      this.index = settings.index
      this.calculatePosition()
    },
    check: function(other) {
      this.parent(other)
      if(other instanceof EntityBullet) {
        this.head.damage()
        other.kill()
      }
    },
    kill: function() {
      this.parent()
      ig.game.spawnEntity( EntityDeadSegment, this.pos.x, this.pos.y )
      if(Math.random() < 0.3)
        var self = this
        setTimeout(function() {
            ig.game.spawnEntity( EntityRock, self.pos.x, self.pos.y )
        }, 1000)
    }
  */
