define(function(require) {
  var Entity = require('../../engine/entity')
  var ColouredQuad = require('../components/colouredquad')

  var Goblin = Entity.Define(function(id, data) {
    this.attach(new ColouredQuad(this, '#0F0'))
    this.width = 10
    this.height = 10
  })

  return Goblin

})
