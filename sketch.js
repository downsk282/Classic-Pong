var score = 0
var ball1 = Math.floor(Math.random() * 200);
var ball2 = 100;
var speed1 = (2, 5);
var speed2 = (-5, -2);

function setup() {
  createCanvas(1350, 450);
  noStroke();
}

function draw() {

  background(0,123,123);

  fill('#FF69B4');
  textSize(30);
  text("Your Score Is: " + score, 590, 40);

  fill('#FF69B4');
  rect(mouseX, 350, 120, 15);

  movement();
  display();
  bounce();
  paddle();
  
}

function movement() {
  ball1 += speed1;
  ball2 += speed2;
}


function bounce() {

  if (ball1 < 10 ||
    ball1 > 1350 - 10) {
    speed1 *= -1;
  }
  if (ball2 < 10 ||
    ball2 > 1350 - 10) {
    speed2 *= -1;
  }
}

function paddle() {
  if ((ball1 > mouseX &
      ball1 < mouseX + 50) &
    (ball2 + 10 >= 350)) {
    speed1 *= -1;
    speed2 *= -1;
    score++;

  }
}

function display() {
    fill('#FF69B4');
    ellipse(ball1, ball2, 30, 30);
  }