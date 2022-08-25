let squareSize;
let lineWidth;

function setup() {
    createCanvas(400, 300); 
    lineWidth = random(2, 10); 
    background(100);
}

function draw() { 
    lineWidth = random(4, 28);
    squareSize = random(5, 250);

    rectMode(CENTER);
    strokeWeight(lineWidth);
    stroke(0, 0, 255, 10);
    fill(0, 255, 0, 10);
    square(200, 150, squareSize);
}