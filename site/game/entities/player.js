define(function(require) {
  var Entity = require('../../engine/entity')
  var ColouredQuad = require('../components/colouredquad')
  var Controller = require('../components/controller')

  var Player = Entity.Define(function(id, data) {
    this.attach(new ColouredQuad(this, '#F00'))
    this.attach(new Controller(this))
    this.width = 10
    this.height = 10
  })

  return Player
})
