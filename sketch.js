var canvas;
var database;
var gameState=0;
var contestentCount;
var quize,contestent,question;
var answer;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quize = new Quize();
  quize.getState();
  quize.start();
}





function draw(){
  background("red");
  if (contestentCount === 4){
    quize.update(1);
  }
 
  if(gameState === 1){
    clear();
    quize.play();
  }
  
}
