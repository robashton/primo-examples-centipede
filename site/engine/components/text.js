define(function(require) {

  var Text = function(entity, text) {
    this.entity = entity
    this.text = text
  }

  Text.prototype = {
    render: function(context) {
      context.font = this.entity.height + 'px sans-serif'
      context.fillText(this.text, this.entity.x, this.entity.y)
    }
  }

  return Text
})
