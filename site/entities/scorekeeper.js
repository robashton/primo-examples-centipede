var Entity = require('primo/lib/entity')
var Text = require('primo/lib/components/text')

module.exports = Entity.Define(function(id, data) {
    this.score = 0
    this.totalrocks = 0
    this.totalflowers = 0
    this.longeststreak = 0
    this.currentstreak = 0
    this.level = 1
    this.x = 0
    this.y = 232
    this.height = 8
    this.scene.on('level-changed', this.onLevelChanged, this)
    this.scene.on('flower-eaten', this.onFlowerEaten, this)
    this.scene.on('rock-destroyed', this.onRockDestroyed, this)
    this.scene.on('player-damaged', this.onPlayerDamaged, this)
    this.text = this.attach(new Text(this, 'Score: 0'))
  }, {
  getStats: function() {
    return {
      score: this.score,
      rockcount: this.totalrocks,
      flowercount: this.totalflowers,
      longeststreak: this.longeststreak
    }
  },
  onLevelChanged: function(level) {
    this.level = level
  },
  onFlowerEaten: function(flower) {
    this.currentstreak++
    this.totalflowers++
    var change = this.level * this.currentstreak
    this.score += change
    this.text.display('Score: ' + this.score)
    this.raise('score-changed', {
      amount: change,
      x: flower.x,
      y: flower.y
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
