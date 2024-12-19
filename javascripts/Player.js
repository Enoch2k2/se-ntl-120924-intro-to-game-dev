class Player {
  constructor(x, y, height, width, color) {
    this.x = x
    this.y = y
    this.height = height
    this.width = width
    this.color = color
    this.speed = 2
    this.facing = 'up'
    this.moving = false
  }

  update() {
    if(this.moving) {
      if(this.facing == "up") {
        if(this.y > 0) {
          this.y -= this.speed
        }
      } else if (this.facing == "down") {
        if((this.y + this.height) < game.height) {
          this.y += this.speed
        }
      } else if (this.facing == "left") {
        if(this.x > 0) {
          this.x -= this.speed
        }
      } else if (this.facing == "right") {
        if((this.x + this.width) < game.width) {
          this.x += this.speed
        }
      }
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  

  setup() {
    document.addEventListener('keydown', function(event){
      switch(event.which) {
        case W_BUTTON:
          this.moving = true
          this.facing = 'up'
          break
        case S_BUTTON:
          this.moving = true
          this.facing = 'down'
          break
        case A_BUTTON:
          this.moving = true
          this.facing = 'left'
          break
        case D_BUTTON:
          this.moving = true
          this.facing = 'right'
          break
        }
      }.bind(this))
      
      document.addEventListener('keyup', function(event){
        switch(event.which) {
          case W_BUTTON:
            this.moving = false
            break
          case S_BUTTON:
            this.moving = false
            break
          case A_BUTTON:
            this.moving = false
            break
          case D_BUTTON:
            this.moving = false
            break
        }  
    }.bind(this))
  }
}