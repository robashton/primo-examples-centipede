define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')

  return Entity.Define(function() {
    this.width = 12
    this.height = 12
    this.rockType = 0
    this.attach(new Animation(this, 'media/rock.png', 12, 12, 5, [ 0 ]))

    /*
    init: function( x, y, settings ) {
      this.parent( x, y, settings );
      this.addAnim( 'idle', 1.0, [0]);
      this.addAnim( 'idle1', 1.0, [1]);
      this.addAnim( 'idle2', 1.0, [2]);
    },
    check: function(other) {
      this.parent(other)
      if(other instanceof EntityBullet) {
        other.kill()
        if(this.rockType === 2) {
          this.kill()
          Events.raise('rock-destroyed', this)
        }
        else
          this.decreaseSize()
      }
    },
    decreaseSize: function() {
      this.rockType++
      var rockSize = 12 - this.rockType*4
      this.currentAnim = this.anims['idle' + this.rockType]
      this.size.x = rockSize
      this.size.y = rockSize
    } */
  })

})
