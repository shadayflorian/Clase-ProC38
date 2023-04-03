var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

//BP
function preload() {
  backgroundImage = loadImage("./assets/background.png");
 //Subir imagenes del estado play
}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  //condicionales de cambio de estados
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
