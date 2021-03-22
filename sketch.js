var canvas;
var gameState = 0;
var contestantCount,  contestant,allContestants;
var database;
var quiz;
var question;

function setup(){
  canvas = createCanvas(950,600);
  database = firebase.database()
  
  quiz = new Quiz();
  contestant =new Contestant();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  
}
