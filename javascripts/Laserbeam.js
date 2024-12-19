class Laserbeam {
  static all = []
  
  constructor(x, y, w, h, color, facing) {
    this.x = x
    this.y = y
    this.width = w
    this.height = h
    this.color = color
    this.speed = 4
    this.facing = facing
    Laserbeam.all.push(this)
  }

  update() {
    switch(this.facing) {
      case "up":
        if((this.y + this.height) > 0) {
          this.y -= this.speed
        } else {
          const idx = Laserbeam.all.indexOf(this)
          Laserbeam.all.splice(idx, 1)
        }
        break
      case "down":
        if(this.y < game.height) {
          this.y += this.speed
        } else {
          const idx = Laserbeam.all.indexOf(this)
          Laserbeam.all.splice(idx, 1)
        }
        break
      case "left":
        if((this.x) > 0) {
          this.x -= this.speed
        } else {
          const idx = Laserbeam.all.indexOf(this)
          Laserbeam.all.splice(idx, 1)
        }
        break
      case "right":
        if(this.x < game.width) {
          this.x += this.speed
        } else {
          const idx = Laserbeam.all.indexOf(this)
          Laserbeam.all.splice(idx, 1)
        }
        break
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}