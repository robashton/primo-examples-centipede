define(function(require) {
  var Entity = require('engine/entity')
  var Text = require('engine/components/text')
  var TimedRemoval = require('../components/timedremoval')

  return Entity.Define(function(id, data) {
    this.height = 12
    this.vely = -12
    this.attach(new Text(this, data.text, '#FFF'))
    this.attach(new TimedRemoval(this, data.time))
  })
})
