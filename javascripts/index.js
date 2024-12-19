const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const animate = window.requestAnimationFrame

const game = new Game(600, 800, 'black')
// player height / width 40 x 40
const player = new Player((game.width/2) - 20, (game.height/2) - 20, 40, 40, 'blue')

const W_BUTTON = 87
const S_BUTTON = 83
const A_BUTTON = 65
const D_BUTTON = 68

function gameLoop() {
  update()
  draw()
  animate(gameLoop)
}

function update() {
  player.update()
}

function draw() {
  game.draw()
  player.draw()
}

function setup() {
  player.setup()
  animate(gameLoop)
}

setup()