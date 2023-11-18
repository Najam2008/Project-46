var bg
var bottomGround
var topGround
var ballon,ballonImg
var obstacleTop, obsTop1, obsTop2
var obstacleBottom, obsBottom1, obsBottom2, obsBottom3

function preload() {
  bgImg = loadImage("assets/bg.png")
  

  ballonImg = loadAnimation("assets/ballon1.png, assets/ballon2.png, aseets/ballon3.png")

  obstacleTop1 = loadImage("assets/obsTop1.png")
  obstacleTop2 = loadImage("assets/obsTop2.png")

  obstacleBottom1 = loadImage("assets/obsBottom1.png")
  obstacleBottom2 = loadImage("assets/obsBootom2.png")
  obstacleBottom3 = loadImage("assets/obsBottom3.png")
  
  obstacleTop1 = loadImage("assets/obsTop1.png")
  obstacleTop2 = loadImage("assets/obsTop2.png")

  gameOverImg = loadImage("assets/gameOver.png")
  restartImg = loadImage("assets/restart.png")

  jumpsound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")

  function setup() {
    createCanvas(400,400)
    bg = createSprite(165,485,1,1)
    getBackgroundImg();

    bottomGround = createSprite(200,390,800)
    bottomGround.visble=false

    topGround = createSprite(200,10,800,20)
    topGround.visble = false


    getBackgroundImg=(200,800,20)


    Bottomground = createSprite = (200,)
  }


  
}

  
