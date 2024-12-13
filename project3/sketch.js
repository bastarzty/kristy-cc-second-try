let appleCount = 6;  
let lastWatered = 0; 
let interval = 2500; 
let countdown = interval;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(24);
  lastWatered = millis(); 
}

function draw() {
  background(200, 255, 200); 
  
  // clock for falls
  let timePassed = millis() - lastWatered;
  countdown = interval - (timePassed % interval);  // Countdown for each 14 seconds

  
  drawTree(appleCount);
  
  // text
  fill(0);
  text("Get some water for this tree!", width / 2, 50);

  // countdown clock
  let secondsLeft = nf(floor(countdown / 1000), 2);
  text("apple falls if you dont water!!: " + secondsLeft + "s", width / 2, height - 50);

  
  if (timePassed > interval && appleCount > 0) {
    appleCount--;
    lastWatered = millis();  // Reset timer
  }
}

// tree and apples
function drawTree(appleCount) {
  fill(139, 69, 19); 
  stroke(0);
  
  // tree
  rect(width / 2 - 30, height / 2 + 50, 60, 150);
  
  fill(34, 139, 34); 
  ellipse(width / 2, height / 2, 300, 200);  

  // apples
  let applePositions = [
    {x: width / 2 - 90, y: height / 2 - 10},
    {x: width / 2 + 80, y: height / 2 - 2},
    {x: width / 2 - 10, y: height / 2 - 2},
    {x: width / 2 + 1, y: height / 2 + 70},
    {x: width / 2, y: height / 2 - 90},
    {x: width / 2 + 1, y: height / 2 + 20},
  ];

  // apple count
  fill(255, 0, 0);  
  for (let i = 0; i < appleCount; i++) {
    let pos = applePositions[i];
    ellipse(pos.x, pos.y, 30, 30);  
  }
}

// Mouseclick for watering
function mousePressed() {
  if (appleCount < 6) {
    appleCount++; 
  }
  lastWatered = millis(); 
}
