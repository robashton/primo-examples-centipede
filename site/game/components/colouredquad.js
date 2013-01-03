define(function(require) {
  var util = require('../../engine/commons')

  var ColouredQuad = function(entity, colour) {
    this.entity = entity
    this.colour = util.valueOrDefault(colour, '#FFF')
  }

  ColouredQuad.prototype = {
    render: function(context) {
      context.fillStyle = '#0F0'
      context.fillRect(this.entity.x, this.entity.y, this.entity.width, this.entity.height)
    }
  }

  return ColouredQuad
})
