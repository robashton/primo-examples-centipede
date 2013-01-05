define(function(require) {

  var Controller = function(entity) {
    this.entity = entity
    this.input = this.entity.game.input
    this.input.bind(this.input.LEFT_ARROW, "left")
    this.input.bind(this.input.RIGHT_ARROW, "right")
    this.input.bind(this.input.UP_ARROW, "up")
    this.input.bind(this.input.DOWN_ARROW, "down")
  }

  Controller.prototype = {
    tick: function() {
      if(this.input.active('left')) {
        this.entity.velx = -2
      }
      if(this.input.active('right')) {
        this.entity.velx = 2
      }
      if(this.input.active('up')) {
        this.entity.vely = -2
      }
      if(this.input.active('down')) {
        this.entity.vely = 2
      }
    }
  }

  return Controller
})
