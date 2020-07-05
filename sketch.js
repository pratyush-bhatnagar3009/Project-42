var hr;
var mn;
var sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background("black");
  hr = hour();
  mn = minute();
  sc = second();
  textSize(20);
  text(hr + ':' + mn + ':' + sc,10,30);
  fill(0,0,0);

  translate(200,200);
  rotate(-90);
  strokeWeight(8)  
  stroke(255, 100, 150);
  noFill();
  var secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 100, 255);
  var minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(150, 255, 100);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  // Define second angle
  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  // Define minute angle
  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  // Define hour angle
  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  stroke(255);
  point(0, 0);
  fill(255);
  noStroke();
}


