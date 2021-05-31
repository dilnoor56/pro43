var canvas, backgroundImage;
var b1,b2,b3,b4
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bg
var form, player, game;
var car1,car2,car3,car4,cars;

function preload(){
  bg=loadImage("interface1.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
    background(bg)
  if(playerCount === 2){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
}