define(function(require) {
  var Runner = require('../engine/core')

  var runner = new Runner('target')
  runner.on('init', function() {
    this.loadLevel('test1')
  })
  runner.start()
})
