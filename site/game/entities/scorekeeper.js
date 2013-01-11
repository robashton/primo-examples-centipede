define(function(require) {
  var Entity = require('engine/entity')
  var Text = require('engine/components/text')

  return Entity.Define(function(id, data) {
      this.score = 0
      this.totalrocks = 0
      this.totalflowers = 0
      this.longeststreak = 0
      this.currentstreak = 0
      this.x = 0
      this.y = 232
      this.game.on('flower-eaten', this.onFlowerEaten, this)
      this.game.on('rock-destroyed', this.onRockDestroyed, this)
      this.game.on('player-damaged', this.onPlayerDamaged, this)
      this.text = this.attach(new Text(this, 'Score :'))
    }, {
    getStats: function() {
      return {
        score: this.score,
        rockcount: this.totalrocks,
        flowercount: this.totalflowers,
        longeststreak: this.longeststreak
      }
    },
    onFlowerEaten: function(flower) {
      this.currentstreak++
      this.totalflowers++
      var change = this.world.level * this.currentstreak
      this.score += change
      this.raise('score-changed', {
        amount: change,
        x: flower.pos.x,
        y: flower.pos.y
      })
    },
    onRockDestroyed: function(rock) {
      this.totalrocks++
    },
    onPlayerDamaged: function() {
      if(this.currentstreak > this.longeststreak)
        this.longeststreak = this.currentstreak
      this.currentstreak = 0
    }
  })
})
