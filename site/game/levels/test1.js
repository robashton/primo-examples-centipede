define(function(require) {
  var Goblin = require('../entities/goblin')

  var level = {
    entities: [
      { type: Goblin, data: { x: 0, y: 0 } },
      { type: Goblin, data: { x: 10, y: 0 } },
      { type: Goblin, data: { x: 20, y: 0 } }
    ]
  }
  return level
})
