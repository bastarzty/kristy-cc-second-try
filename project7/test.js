let scene_num = 1;
let starsCollected = 0;
let reflectionsMerged = 0;
let ingredientsCollected = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  switch (scene_num) {
    case 1:
      drawScene1(); // Village of Hidden Stars
      break;
    case 2:
      drawScene2(); // City of Mirrors
      break;
    case 3:
      drawScene3(); // Tower of Glass and Smoke
      break;
    case 4:
      drawScene4(); // Garden of Constellations
      break;
    default:
      background(0); 
      break;
  }
  console.log("Scene: " + scene_num);
}

function drawScene1() {
  fill(255, 0, 0);
  text("The Village of Hidden Stars", 10, 20);
  text("Stars collected: " + starsCollected + "/3", 10, 40);

  // Representing stars as simple clickable shapes
  if (starsCollected < 3) {
    fill(255, 215, 0); // Golden color for stars
    ellipse(150, 150, 20, 20);
    ellipse(250, 200, 20, 20);
    ellipse(300, 100, 20, 20);
  } else {
    text("All stars collected! Press '2' to continue.", 10, 60);
  }
}

function drawScene2() {
  fill(0, 255, 0);
  text("The City of Mirrors", 10, 20);
  text("Reflections merged: " + reflectionsMerged + "/3", 10, 40);

  // Representing reflections as fragmented parts
  if (reflectionsMerged < 3) {
    fill(100, 100, 255); // Blue color for mirrors
    rect(150, 150, 40, 60);
    rect(250, 200, 30, 70);
    rect(300, 100, 50, 50);
  } else {
    text("Reflections complete! Press '3' to continue.", 10, 60);
  }
}

function drawScene3() {
  fill(0, 0, 255);
  text("The Tower of Glass and Smoke", 10, 20);
  text("Ingredients collected: " + ingredientsCollected + "/3", 10, 40);

  // Representing alchemical ingredients as clickable shapes
  if (ingredientsCollected < 3) {
    fill(139, 69, 19); // Brown color for ingredient items
    ellipse(150, 150, 20, 20);
    ellipse(250, 200, 20, 20);
    ellipse(300, 100, 20, 20);
  } else {
    text("Eternal Flame crafted! Press '4' to continue.", 10, 60);
  }
}

function drawScene4() {
  fill(255, 255, 0);
  text("The Garden of Constellations", 10, 20);
  text("Press '1' to play again", 10, 40);

  // Display stars and possible constellation
  fill(255, 215, 0);
  ellipse(100, 100, 10, 10);
  ellipse(200, 200, 10, 10);
  ellipse(300, 150, 10, 10);
  text("A hidden constellation forms...", 10, 60);
}

// Mouse interaction for collecting stars, reflections, and ingredients
function mousePressed() {
  if (scene_num === 1 && starsCollected < 3) {
    starsCollected++; // Collect stars in Scene 1
  } else if (scene_num === 2 && reflectionsMerged < 3) {
    reflectionsMerged++; // Merge reflections in Scene 2
  } else if (scene_num === 3 && ingredientsCollected < 3) {
    ingredientsCollected++; // Collect ingredients in Scene 3
  }
}

// Key interactions to navigate between scenes
function keyPressed() {
  if (key == '1') {
    scene_num = 1;
    starsCollected = 0; // Reset for replay
  } 
  else if (key == '2' && starsCollected >= 3) {
    scene_num = 2;
    reflectionsMerged = 0; // Reset for new scene
  } 
  else if (key == '3' && reflectionsMerged >= 3) {
    scene_num = 3;
    ingredientsCollected = 0; // Reset for new scene
  } 
  else if (key == '4' && ingredientsCollected >= 3) {
    scene_num = 4;
  }
}
