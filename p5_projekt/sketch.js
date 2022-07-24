// Single-sketch example

function setup (){
  createCanvas (800, 600);
}

function draw(){
  background(100, 100, 0);
  fill(255);
  noStroke();
  rectMode(CENTER);
  ellipse(mouseX, mouseY, 50, 50);
}
