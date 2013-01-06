define(function(require) {
  var CollisionMap = require('../engine/collisiongrid')

  var width = 32
    , height = 32
    , cellsize = 32
    , collisioncount = 0
    , lastid = 0
    , entityCount = 100
    , iterations = 1


  function createEntity() {
    return {
      id: '' + (++lastid),
      x: Math.random() * (width*cellsize),
      y: Math.random() * (height*cellsize),
      width: Math.random() * cellsize,
      height: Math.random() * cellsize,
      velx: Math.random() * 0.5 - 0.25,
      vely: Math.random() * 0.5 - 0.25,
      notifyOfCollisionWith: collisionFunction
    }
  }


  function collisionFunction() {
    collisioncount++
  }


  var entities = []
  var i, j

  for(i =0 ; i < entityCount; i++)
    entities.push(createEntity())

  console.time('test')
  for(i = 0; i < iterations; i++) {
    var world = new CollisionMap(width, height, cellsize)
    for(j = 0; j < entities.length; j++) {
      var entity = entities[j]
      entity.x += entity.velx
      entity.y += entity.vely
      world.addEntity(entity)
    }
    world.performCollisionChecks()
  }
  console.log('Collisions made', collisioncount)
  console.timeEnd('test')
})
