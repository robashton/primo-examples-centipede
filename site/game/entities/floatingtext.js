define(function(require) {
  var Entity = require('engine/entity')
  var Text = require('engine/components/text')
  var TimedRemoval = require('../components/timedremoval')

  return Entity.Define(function(id, data) {
    this.attach(new Text(this, data.text))
    this.attach(new TimedRemoval(this, data.time))
    this.vely = -6
  })
})
