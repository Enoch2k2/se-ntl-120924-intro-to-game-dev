class Game {
  constructor(height, width, backgroundColor) {
    this.height = height
    this.width = width
    this.backgroundColor = backgroundColor
  }

  draw() {
    ctx.fillStyle = this.backgroundColor
    ctx.fillRect(0, 0, this.width, this.height)
  }
}