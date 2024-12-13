let w, h;
let r, g, b;
let t, eyesize, faceWidth, faceHeight;
let phrase = '똘병이짱'; // Initial phrase
let typesize = 50;
let phrases = ['똘', '병', '이', '짱', '똘병이짱' ]; // Array of phrases
let phraseIndex = 0; // Keeps track of the current phrase

function setup() {
  createCanvas(400, 400);
  r = 255;
  g = 255;
  b = 255;
  angleMode(DEGREES);
}

function draw() {
  background(r, g, b);

  faceWidth = map(mouseX, 0, width, 100, 150); 
  faceHeight = map(mouseX, 0, width, 180, 220); 
  eyesize = map(mouseX, 0, width, 20, 35); // 
  beakWidth = map(mouseY, 0, height, 40, 80);
  beakHeight = map(mouseY, 0, height, 20, 40); 
  
  //HEAD
  fill("rgb(255,255,255)");
  rect(140, 100, faceWidth, faceHeight, 45);

  
  fill("black");
  rect(140, 100, faceWidth, faceHeight / 2, 45, 45, 0, 0);

  // Left eye
  push();
  translate(140, 150);
  rotate(10);
  fill("rgba(255,255,255,0.87)");
  ellipse(45, 70, eyesize, eyesize / 1.5); // Dynamic eye size
  pop();

  // Right eye
  push();
  translate(140, 150);
  rotate(-10);
  fill("rgba(255,255,255,0.87)");
  ellipse(75, 90, eyesize, eyesize / 1.5); // Dynamic eye size
  pop();

 
  
  drawFacialFeatures();


}

function drawFacialFeatures() {
  fill("rgb(5,5,5)");
  ellipse(175, 227, 15, 17); // Left pupil
  ellipse(226, 226, 15, 17); // Right pupil

  fill("rgb(5,5,5)");
  ellipse(160, 237, 2);
  ellipse(226, 252, 2);
  ellipse(233, 243, 2);
  ellipse(239, 250, 2);
  ellipse(242, 238, 1);

  // Beak
  fill(255, 200, 0);
  ellipse(200, 269, beakWidth, beakHeight); 
  line(170, 270, 230, 270);
  
   // TEXT
  fill(255, 60, 100);
  textSize(typesize);
  text(phrase, mouseX, mouseY);
}

function mouseClicked() {
  // Change background color when the mouse is clicked
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function mousePressed() {
  // Change the background color and update the text and its size
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  typesize = random(10, 40); 
   phrase = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;
  }
