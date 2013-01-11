define(function(require) {

  var TimedRemoval = function(entity, time) {
    this.time = time
    this.entity = entity
    this.totalsofar = 0
  }

  TimedRemoval.prototype = {
    tick: function(frameTime) {
      this.totalsofar += frameTime
      if(this.totalsofar >= this.time)
        this.entity.kill()
    }
  }

  return TimedRemoval

})
