var Entity = require('primo/lib/entity')
var Text = require('primo/lib/components/text')
var TimedRemoval = require('../components/timedremoval')

module.exports = Entity.Define(function(id, data) {
  this.height = 12
  this.vely = -12
  this.attach(new Text(this, data.text, '#FFF'))
  this.attach(new TimedRemoval(this, data.time))
})
