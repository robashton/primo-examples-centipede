var _ = require('underscore')

var Shrinker = function(entity, sizes) {
  this.sizes = sizes
  this.entity = entity
  this.current = 0
  this.entity.handle('hitbybullet', _.bind(this.hitByBullet, this))
  this.updateEntity()
}

Shrinker.prototype = {
  hitByBullet: function() {
    this.current++
    if(this.current === this.sizes.length)
      return this.entity.kill()
    else
      this.updateEntity()
  },
  updateEntity: function() {
    this.entity.width = this.sizes[this.current]
    this.entity.height = this.sizes[this.current]
  }
}

module.exports = Shrinker
