define(function(require) {
  var Entity = require('engine/entity')

  return Entity.define({

  })
  EntityWorld = ig.Entity.extend({
    init: function( x, y, settings ) {
      this.parent( x, y, settings );
      this.level = 1
      Events.on('flower-eaten', this.onFlowerEaten, this)
    },
    start: function() {
      this.input = ig.game.spawnEntity(EntityCentipedeController,0,0, { head: this.head })
      this.defence = ig.game.spawnEntity(EntityDefenceUnit, 160, 232, {
        head: this.head
      })
      this.audio = ig.game.spawnEntity(EntityAudio, 0,0)
      this.createRocks()
      this.startLevel()
    },
    startLevel: function() {
      this.createFlowers()
      this.head.speed = 50 + (this.level*10)
      this.defence.bulletSpeed = 40 + (this.level*5)
      this.defence.firingRate = Math.floor(Math.max(150 - (this.level * 10), 30))
      this.defence.speed = 25 + this.level*2
      this.defence.accuracyTolerance = 30 + (this.level * 5)
      Events.raise('level-started', this.level)
    },
    createRocks: function() {
      for(var i = 0; i < 10 ; i++) {
        ig.game.spawnEntity(EntityRock, 
              Math.random() * 270 + 25,
              Math.random() * 180 + 30)
      }
    },
    removeAll: function(Type) {
      var rocks = ig.game.getEntitiesByType( Type )
      for(var i = 0; i < rocks.length; i++)
        rocks[i].kill()
    }
  })
})
