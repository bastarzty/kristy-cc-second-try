let angle = 0;
let numCircles = 50;  
let numRings = 20;   
let baseRadius = 10;  
let maxRadius = 250;  
let rotationSpeed = 0.02; 

function setup() {
  createCanvas(600, 600);
  noStroke();
  colorMode(HSB, 255);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);  // pattern be center

  let radiusStep = (maxRadius - baseRadius) / numRings;  // space between each ring

  // Loop1
  for (let ring = 0; ring < numRings; ring++) {
    let currentRadius = baseRadius + ring * radiusStep;

    // Loop2
    for (let i = 0; i < numCircles; i++) {
      let angleOffset = (i * TWO_PI) / numCircles;  
      let x = currentRadius * cos(angleOffset + angle);  // X position of the circle
      let y = currentRadius * sin(angleOffset + angle);  // Y position of the circle

      // colors 
      if (i % 2 === 0) {
        fill(255, 204, 0);  
      } else {
        fill(63, 100, 255);  
      }

      // ellipse
      ellipse(x, y, 20 - ring * 0.5, 40 - ring * 0.5);  
    }
  }

  // create rotation
  angle += rotationSpeed;
}
