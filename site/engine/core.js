define(function(require) {
  var Eventable = require('eventable')
  var _ = require('underscore')
  var Layer = require('./layer')

  var Runner = function(targetid) {
    Eventable.call(this)
    this.targetid = targetid
    this.entities = []
    this.layers = []
    this.canvas = document.getElementById(this.targetid)
    this.context = this.canvas.getContext('2d')
  }

  Runner.prototype = {
    start: function() {
      this.raise('init')
      setInterval(_.bind(this.tick, this), 1000/30)
    },
    loadLevel: function(level) {
      this.entities = []
      var i = 0
      for(i = 0; i < level.entities.length; i++)
        this.spawnEntity(level.entities[i].type, level.entities[i].data)
      for(i = 0 ; i < level.layers.length; i++) {
        this.layers.push(new Layer(this, level.layers[i]))
      }
    },
    spawnEntity: function(Type, data)  {
      var entity = new Type('entity-' + this.entities.length, data)
      this.entities.push(entity)
      return entity
    },
    tick: function() {
      this.raise('tick')
      for(var i = 0; i < this.entities.length; i++)
        this.entities[i].tick()
      this.render()
    },
    render: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      var i = 0
      for(i = 0; i < this.layers.length; i++)
        this.layers[i].render(this.context)

      for(i = 0; i < this.entities.length ; i++) {
        this.entities[i].render(this.context)
      }
    }
  }
  _.extend(Runner.prototype, Eventable.prototype)

  return Runner
})
