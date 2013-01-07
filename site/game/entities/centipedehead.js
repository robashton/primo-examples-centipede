define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')
  var CentipedeSegment = require('./centipedesegment')

  var Head = function(entity) {
    this.entity = entity
    this.game = entity.game
    this.maxSegments = 20
    this.segments = []
    this.history = []
    this.speed = 2,
    this.direction = ''
    this.addInitialSegments()
    this.moveRight()
  }

  Head.prototype = {
    tick: function() {
      this.updateHistory()
      this.checkBounds()
    },
    addInitialSegments: function() {
      for(var i =0 ; i < 5; i++) {
        this.grow()
      }
    },
    moveLeft: function() {
      this.changeDirection('left', -this.speed, 0)
    },
    moveRight: function() {
      this.changeDirection('right', this.speed, 0)
    },
    moveUp: function() {
      this.changeDirection('up', 0, -this.speed)
    },
    moveDown: function() {
      this.changeDirection('down', 0, this.speed)
    },
    changeDirection: function(direction, x, y) {
      if(this.direction === direction) return
      this.direction = direction
      this.entity.velx = x
      this.entity.vely = y
      // this.currentAnim = this.anims['walk' + this.direction]
      this.pushHistory()
    },
    damage: function() {
      if(this.segments.length === 0) {
        this.entity.raise('player-died')
        //this.kill()
        return
      }
      this.entity.raise('player-damaged')
      var segment = this.segments.pop()
      // segment.kill()
    },
    grow: function() {
      if(this.segments.length === this.maxSegments) return
      var segment = this.entity.game.spawnEntity(CentipedeSegment, {
        x: this.entity.x,
        y: this.entity.y,
        head: this,
        index: this.segments.length+1
      })
      this.segments.push(segment)
    },
    getPositionForSegment: function(index) {
      var distanceFromHead = index * 8
      return this.tryGetPositionFromHistory(this.history.length-1, distanceFromHead, 0)
    },
    tryGetPositionFromHistory: function(index, desired, current) {
      var item = this.history[index]
        , distx = (item.endx - item.x)
        , disty = (item.endy - item.y)

      var distance = Math.sqrt(distx*distx + disty*disty)
      var xvel = distx/distance
      var yvel = disty/distance
      var total = distance + current

      if(total >= desired) {
        var remainder = desired - current
        return {
          x: item.endx - (remainder * xvel),
          y: item.endy - (remainder * yvel),
          direction: item.direction
        }
      }
      else {
        if(index === 0)
          return { x: item.x, y: item.y, direction: item.direction }
        else
          return this.tryGetPositionFromHistory(index-1, desired, total)
      }
    },
    checkBounds: function() {
      if(this.x < 0)
        this.moveRight()
      if(this.x > 312)
        this.moveLeft()
      if(this.y < 0)
        this.moveDown()
      if(this.y > 200)
        this.moveUp()
    },
    updateHistory: function() {
      this.history[this.history.length-1].endx = this.x
      this.history[this.history.length-1].endy = this.y
    },
    pushHistory: function() {
      this.history.push({
        x: this.x,
        y: this.y,
        endx: this.x,
        endy: this.y,
        direction: this.direction
      })
    }
  }

  return Entity.Define(function(id, data) {
    this.width = 8
    this.height = 8
    this.attach(new Animation(this, 'media/centipede.png', 8, 8, 10, [0,1]))
    this.attach(new Head(this))
  })

})

  /*
      this.addAnim( 'walkleft', 0.1, [0, 1]);
      this.addAnim( 'walkright', 0.1, [0, 1]);
      this.addAnim( 'walkdown', 0.1, [2, 3]);
      this.addAnim( 'walkup', 0.1, [2,3], true);
      this.anims.walkleft.flip.x = true
      this.anims.walkup.flip.y = true
    },
    },
    check: function(other) {
      this.parent(other)
      if(other instanceof EntityBullet) {
        this.damage()
        other.kill()
      }
    },
    kill: function() {
      this.parent()
      for(var i = 0; i < this.segments.length; i++)
        this.segments[i].kill()
    },
  */
