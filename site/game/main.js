define(function(require) {
  var Runner = require('../engine/core')

  var runner = new Runner('target')
  runner.on('init', function() {
    this.loadLevel('/game/levels/test1.json')
  })
  runner.start()
})
