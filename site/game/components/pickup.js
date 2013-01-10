define(function(require) {
  var _ = require('underscore')

  var Pickup = function(entity) {
    this.entity = entity
    this.entity.on('collision', this.onCollision, this)
    this.entity.handle('take', _.bind(this.take, this))
  }

  Pickup.prototype = {
    onCollision: function(other) {
      other.dispatch('pickup', this)
    },
    take: function(accepter) {
      this.entity.raise('picked-up', this)
      this.entity.kill()
    }
  }

  return Pickup
})
