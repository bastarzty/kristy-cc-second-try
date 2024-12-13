//music:Written by Rafael Krux. Little bit of magic. Nice light clarinet work. Not enough scones. I need some more damn scones with this! Argh! How can we get some more scones in here? Is there delivery out this far? Who has scones? Can you make them or something? This music is available for commercial and non-commercial purposes. https://freepd.com/scoring.php


let scene_num = 1;
let starsCollected = 0;
let totalStars = 3;
let starPositions = [];
let reflectionsCollected = 0;
let totalReflections = 3;
let mirrors = [];
let player, lanImg, openingImg, ch1Img, ch2Img, ch3Img, outroImg;
let gameOver = false;
let stars = [];
let constellation = [];
let clickedStars = 0;
let maxConstellationSize = 5;
let constellationFormed = false;
let bgm;
let customFont;

// Preload images
function preload() {
  bgm = loadSound('bgm.mp3');
  lanImg = loadImage("lan.png");
  openingImg = loadImage("opening.png");
  ch1Img = loadImage("ch1.png");
  ch2Img = loadImage("ch2.png");
  ch3Img = loadImage("ch3.png");
  outroImg = loadImage("last outro.png");
  customFont = loadFont("font.otf");
}



// Setup function
function setup() {
  createCanvas(600, 400);
  setupPlayer();
  setupStars();
  setupMirrors();
  setupConstellation();
  bgm.loop(); // 
  bgm.setVolume(0.5); 
  textFont(customFont)
  setupPlayer();
  setupStars();
  setupMirrors();
  setupConstellation();
}

// Main draw loop
function draw() {
  if (scene_num === 1) {
    displayOpeningScene();
  } else if (scene_num === 2) {
    displayTransitionScene(ch1Img, "Lan enters a village to seek wisdom, represented by stars.");
  } else if (scene_num === 3) {
    displayVillageScene();
  } else if (scene_num === 4) {
    displayTransitionScene(ch2Img, "Lan enters a city of mirrors, reflecting parts of her identity.");
  } else if (scene_num === 5) {
    displayMirrorScene();
  } else if (scene_num === 6) {
    displayTransitionScene(ch3Img, "Lan gazes at a starry sky, reflecting on her journey.");
  } else if (scene_num === 7) {
    displayConstellationScene();
  } else if (scene_num === 8) {
    displayEndingScene();
  }
}

// Opening Scene
function displayOpeningScene() {
  background(openingImg);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text("Lan's Journey: The Eternal Flame", width / 2, 80);
  textSize(20);
  text(
    "In a quiet village, there lives an ordinary girl named Lan.\n" +
    "She yearns to explore the unknown, searching for wisdom.\n" , 
    width / 2, height / 2
  );
  text("Use Arrow Keys to move and Spacebar to proceed.", width / 2, height - 90)
  text("Press 'Spacebar' to begin.", width / 2, height - 50);
}

// Transition Scenes
function displayTransitionScene(image, description) {
  background(image);
  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(description, width / 2, height / 2);
  text("Press 'Spacebar' to continue", width / 2, height - 50);
}

// Village Scene
function displayVillageScene() {
  background(ch1Img);
  fill(255, 215, 0);
  textSize(16);
  textAlign(LEFT, TOP);
  text("The Village of Hidden Stars", 10, 10);
  text("Stars collected: " + starsCollected + "/" + totalStars, 10, 30);
  player.move();
  player.display();

  for (let i = 0; i < totalStars; i++) {
    let star = starPositions[i];
    if (!star.collected) {
      drawStar(star.x, star.y, 10, 20, 5);
      if (dist(player.x + player.size / 2, player.y + player.size / 2, star.x, star.y) < 20) {
        star.collected = true;
        starsCollected++;
      }
    }
  }

  if (starsCollected === totalStars) {
    fill(255);
    textAlign(CENTER, BOTTOM);
    text("All stars collected! Press 'Spacebar' to continue.", width / 2, height - 30);
  }
}

// Mirror Scene
function displayMirrorScene() {
  background(ch2Img);
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("The City of Mirrors", 10, 10);
  text("Reflections collected: " + reflectionsCollected + "/" + totalReflections, 10, 30);
  player.move();
  player.display();

  for (let i = 0; i < mirrors.length; i++) {
    let mirror = mirrors[i];
    if (!mirror.collected) {
      fill(200, 200, 255, 150);
      rect(mirror.x, mirror.y, mirror.width, mirror.height);
      fill(0);
      textAlign(CENTER, CENTER);
      text(mirror.type, mirror.x + mirror.width / 2, mirror.y + mirror.height / 2);
    }

    let reflectedX = mirror.x + (mirror.x - player.x) / 2;
    let reflectedY = mirror.y + (mirror.y - player.y) / 2;
    let reflectedSize = player.size / 2;
    fill(150, 200, 255, 100);
    ellipse(reflectedX, reflectedY, reflectedSize);

    if (dist(player.x + player.size / 2, player.y + player.size / 2, reflectedX, reflectedY) < reflectedSize / 2) {
      gameOver = true;
    }

    if (!mirror.collected && dist(player.x + player.size / 2, player.y + player.size / 2, mirror.x + mirror.width / 2, mirror.y + mirror.height / 2) < 40) {
      mirror.collected = true;
      reflectionsCollected++;
    }
  }

  if (gameOver) {
    fill(255, 0, 0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over! Press 'R' to Restart", width / 2, height / 2);
  }

  if (reflectionsCollected === totalReflections) {
    fill(255);
    textAlign(CENTER, BOTTOM);
    text("All reflections found! Press 'Spacebar' to continue.", width / 2, height - 30);
  }
}

// Constellation Scene
function displayConstellationScene() {
  background(ch3Img);
  noStroke();
  for (let star of stars) {
    fill(star.clicked ? color(255, 215, 0) : 255);
    ellipse(star.x, star.y, star.r);
  }

  stroke(255, 215, 0);
  strokeWeight(2);
  noFill();
  if (constellation.length > 1) {
    beginShape();
    for (let star of constellation) {
      vertex(star.x, star.y);
    }
    endShape();
  }

  fill(255);
  textAlign(CENTER, TOP);
  textSize(30);
  text("Click on stars to form a constellation", width / 2, 60);

  if (constellationFormed) {
    textSize(20);
    text("The Constellation of Wisdom has formed!\nProceeding to the final scene.", width / 2, height / 2);
    setTimeout(() => {
      scene_num = 8; // to ending Scene
    }, 1000);
  }
}

// Ending Scene
function displayEndingScene() {
  background(outroImg);
  fill(255);
  textSize(25);
  textAlign(CENTER);
  text(
    "Congratulation! Lan stands beneath the Garden of Constellations,\n" +
    "where stars form symbols of her journey.\n" +
    "Thank you for guiding her.", 
    width / 2, height / 3
  );
  text("Press 'R' to restart the journey.", width / 2, height - 50);
}

// Star drawing function
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Player setup
function setupPlayer() {
  player = {
    x: 50,
    y: 350,
    size: 100,
    move: function () {
      if (keyIsDown(LEFT_ARROW)) this.x -= 2;
      if (keyIsDown(RIGHT_ARROW)) this.x += 2;
      if (keyIsDown(UP_ARROW)) this.y -= 2;
      if (keyIsDown(DOWN_ARROW)) this.y += 2;
      this.x = constrain(this.x, 0, width - this.size);
      this.y = constrain(this.y, 0, height - this.size);
    },
    display: function () {
      image(lanImg, this.x, this.y, this.size, this.size);
    }
  };
}

// Setup Stars
function setupStars() {
  starPositions = [];
  for (let i = 0; i < totalStars; i++) {
    starPositions.push({ x: random(50, width - 50), y: random(50, height - 50), collected: false });
  }
}

// Setup Mirrors
function setupMirrors() {
  mirrors = [];
  let reflectionTypes = ["Student", "Designer", "Dreamer"];
  for (let i = 0; i < totalReflections; i++) {
    mirrors.push({ x: random(100, 500), y: random(50, 300), width: 80, height: 120, type: reflectionTypes[i], collected: false });
  }
}

// Setup Constellation
function setupConstellation() {
  stars = [];
  constellation = [];
  clickedStars = 0;
  constellationFormed = false;
  for (let i = 0; i < 50; i++) {
    stars.push({ x: random(width), y: random(height), r: random(5, 10), clicked: false });
  }
}

// Mouse interaction for constellation
function mousePressed() {
  if (scene_num === 7 && !constellationFormed) {
    for (let star of stars) {
      if (!star.clicked && dist(mouseX, mouseY, star.x, star.y) < star.r * 1.5) {
        star.clicked = true;
        constellation.push(star);
        clickedStars++;
        if (clickedStars >= maxConstellationSize) {
          constellationFormed = true;
        }
        break;
      }
    }
  }
}

// Restart logic
function keyPressed() {
  if (key === ' ') {
    if (scene_num < 8 && !gameOver) {
      scene_num++;
      if (scene_num === 3) setupStars();
      if (scene_num === 5) setupMirrors();
      if (scene_num === 7) setupConstellation();
    }
  } else if (key === 'r' || key === 'R') {
    scene_num = 1;
    setup();
  }
}
