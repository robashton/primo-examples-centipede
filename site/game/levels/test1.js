define(function(require) {
  var Goblin = require('../entities/goblin')
  var Underground = require('../tilesets/underground')


  var level = {
    layers: [
       {
        width: 30,
        height: 30,
        tileset: Underground,
        data: [
          "dirt", "blank", "blank", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "blank", "blank", "rock", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "dirt", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "dirt", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "dirt", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "dirt", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "dirt", "rock", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "dirt", "dirt", "rock", "blank", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "blank", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "rock", "dirt", "dirt", "blank", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt",
          "dirt", "rock", "rock", "dirt", "rock", "dirt", "dirt", "dirt", "rock", "dirt", "dirt", "rock", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "dirt", "rock", "dirt", "rock", "dirt", "dirt"
    ]}
    ],
    entities: [
      { type: Goblin, data: { x: 0, y: 0 } },
      { type: Goblin, data: { x: 10, y: 0 } },
      { type: Goblin, data: { x: 20, y: 0 } }
    ]
  }
  return level
})
