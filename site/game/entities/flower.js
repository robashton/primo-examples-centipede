define(function(require) {
  var Entity = require('engine/entity')
  var Animation = require('engine/components/animation')
  var RigidBody = require('engine/components/rigidbody')

  return Entity.Define(function(id, data) {
    this.width = 6
    this.height = 6
    this.attach(new RigidBody(this, { weight: 0 }))
    this.attach(new Animation(this, 'media/flower.png', 6, 6 ))
      .define('idle', 5, [ 0, 1, 2, 3, 4 ])

    /*
    check: function(other) {
      this.parent(other)
      if(other instanceof EntityBullet) {
        other.kill()
      }
      else if(other instanceof EntityCentipedeHead) {
        other.grow()
        this.kill()
        Events.raise('flower-eaten', this)
      }
    } */
  })
})
