var input,heading;
var ship
var gameState = 'play'
var player
var asteroid
var asteroid2
var gameOver
var GAMEOVER = 'false'
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  ship = createSprite(windowWidth/2, windowHeight/2,60,40);

  player = createSprite(windowWidth/2 + 20, windowHeight/2 -50, 20, 20);

  asteroid = createSprite(windowWidth, windowHeight/2, 120, 120)
  asteroid.y = random( 0, windowHeight)
  asteroid.velocityX = -3

  asteroid2 = createSprite(windowWidth, windowHeight/2, 120, 120)
  asteroid2.y = random( 0, windowHeight)
  asteroid2.velocityX = -2

  gameOver = createSprite(windowWidth, windowHeight,windowWidth*2,5);
}

function draw() {
  background('black')
  if (gameState === 'play'){
      //ship controls
    if (keyDown('w')){
      ship.y = ship.y - 5
    }
    if (keyDown('s')){
      ship.y = ship.y + 5
    }
    if (keyDown('a')){
      ship.x = ship.x - 5
    }
    if (keyDown('d')){
      ship.x = ship.x + 5
    }
    // player jump
    if (player.collide(ship) && keyDown('up') || player.collide(asteroid) && keyDown('up')){
      player.velocityY = -20
    }
    if (player.collide(asteroid2) && keyDown('up')){
      player.velocityY = -20
    }
    //player controls
    if (keyDown('down')){
      player.y = player.y + 5
    }
    if (keyDown('left')){
      player.x = player.x - 5
    }
    if (keyDown('right')){
      player.x = player.x + 5
    }
    //player gravity
    player.velocityY = player.velocityY + 1
    //player collisions
    player.collide(ship)
    player.collide(asteroid)
    player.collide(asteroid2)
    ship.collide(asteroid)
    ship.collide(asteroid2)
    //asteroid respawn
    if (asteroid.x === 0){
      asteroid.x = windowWidth
      asteroid.y = random(0, windowHeight)
    }
        if (asteroid2.x === 0){
      asteroid2.x = windowWidth
      asteroid2.y = random(0, windowHeight)
    }
    if (player.collide(gameOver)){
      gameState = 'end'
        if (gameState = 'end'){
          GAMEOVER = 'true'
      player.velocityY = 5
    }
    if (gameOver === 'true'){
      text('GAME OVER', windowwidth/2, windowheight/2)
    }
  }

  }

  drawSprites()
}