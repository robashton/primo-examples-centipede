define(function(require) {

  var Goblin = function(id, data) {
    this.id = id
    this.x = data.x
    this.y = data.y
    this.width = 10
    this.height = 10
  }

  Goblin.prototype = {
    render: function(context) {
      context.fillStyle = '#0F0'
      context.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  return Goblin

})
