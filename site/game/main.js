define(function(require) {
  var Runner = require('../engine/core')
  var test1 = require('./levels/test1')

  var runner = new Runner('target')
  runner.on('init', function() {
    this.loadLevel(test1)
  })
  runner.start()
})
