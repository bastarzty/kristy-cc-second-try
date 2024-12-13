let bubbles = [];
let screenTime = [633, 978, 788, 569, 620, 703, 630]; 
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let colors = [
  [255, 100, 100],  // Red for Sunday
  [255, 165, 0],    // Orange for Monday
  [255, 255, 0],    // Yellow for Tuesday
  [0, 255, 0],      // Green for Wednesday
  [0, 255, 255],    // Tiffany Blue?green for Thursday
  [0, 100, 255],    // Blue for Friday
  [255, 0, 255]     // Purple for Saturday
];

function setup() {
  createCanvas(600, 600);
  img = loadImage ('microsoft.jpg');
 
  for (let i = 0; i < screenTime.length; i++) {
    let radius = map(screenTime[i], 500, 1000, 40, 120); // screenTime to bubble radius
    let bubble = new Bubble(random(width), random(height), radius, days[i], screenTime[i], colors[i]);
    bubbles.push(bubble);
  }
}

function draw() {
  background('#FFFFFF');

  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
}

function mousePressed() {
 
  for (let bubble of bubbles) {
    if (bubble.isHovered()) {
      bubble.explode();
    }
  }
}

class Bubble {
  constructor(x, y, r, day, time, col) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.day = day;
    this.time = time;
    this.col = col;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.isExploded = false;
  }

  // Move bubble
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // bubbles inside the canvas
    if (this.x < this.r || this.x > width - this.r) {
      this.xSpeed *= -1;
    }
    if (this.y < this.r || this.y > height - this.r) {
      this.ySpeed *= -1;
    }
  }

  

  //  bubble
  display() {
    if (!this.isExploded) {
      noStroke();
      fill(this.col[0], this.col[1], this.col[2], 150); 
      if (this.isHovered()) {
        fill(this.col[0], this.col[1], this.col[2], 255); // Brighter when hovered
        this.r *= 1.05; // Slightly enlarge the bubble
      }
      ellipse(this.x, this.y, this.r * 2);
      // Display the day text
      fill(0);
      textSize(16);
      textAlign(CENTER, CENTER);
      text(this.day, this.x, this.y);
    } else {
      fill('#58553C00'); // Explode effect 
      ellipse(this.x, this.y, this.r * 2);
      fill('#000000');
      textSize(20);
      textAlign(CENTER, CENTER);
      text(this.time + " mins", this.x, this.y + 10);
      
}
  }

  // hovered over
  isHovered() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < this.r;
  }

  // Bubble explosion
  explode() {
    this.isExploded = true;
  }
}

