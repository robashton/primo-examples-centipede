var Text = require('primo-text')
var Primo = require('primo')

var TimedRemoval = require('../components/timedremoval')

module.exports = Primo.DefineEntity(function(id, data) {
  this.height = 12
  this.vely = -12
  this.attach(new Text(this, data.text, '#FFF'))
  this.attach(new TimedRemoval(this, data.time))
})
