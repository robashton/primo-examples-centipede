define(function(require) {
  var Runner = require('engine/core')
  var Goblin = require('game/entities/goblin')

  var width = 32
    , height = 32
    , cellsize = 32
    , collisioncount = 0
    , lastid = 0
    , entityCount = 100
    , iterations = 1

  function createEntity() {
    return {
      x: Math.random() * (width*cellsize),
      y: Math.random() * (height*cellsize),
      velx: Math.random() * 0.5 - 0.25,
      vely: Math.random() * 0.5 - 0.25,
    }
  }
  var entities = []
  var i, j


  var runner = new Runner('target')
  runner.on('init', function() {
    for(i =0 ; i < entityCount; i++)
      entities.push(runner.spawnEntity(Goblin, createEntity()))
  })
  runner.start()
})
