function setup() {
  createCanvas(400, 600);
  background('rgb(255,255,255)');
  angleMode(DEGREES);
  
  push();
  translate(130, 350); 
  rotate(15); 
  fill(0); 
  rect(0, 0, 60, 150); 
  pop(); 
  
  push();
  translate(200, 370);
  rotate(-15); 
  fill(0); 
  rect(0, 0, 60, 150); 
  pop();
  
  push();
  translate(265, 500); 
  rotate(-15); 
  fill(0); 
  arc(1, 2, 60, 60, 0, 180); 
  pop();
  
  push();
  translate(120, 500); 
  rotate(15); 
  fill(0); 
  arc(1, 2, 60, 60, 0, 180); 
  pop();
  
  //foot
  push(); 
  translate(105, 500); 
  rotate(15); 
  fill('black'); 
  rect(0, 0, 30, 50);
  pop();
  
  push(); 
  translate(255, 510); 
  rotate(-15); 
  fill('black'); 
  rect(0, 0, 30, 50); 
  pop();
  
  arc(90, 570, 80, 60, 180, 360, CHORD)//left
  arc(300, 570, 80, 60, 180, 360, CHORD)//right
  
  //body
  fill('Blue');
  rect(130, 200, 130, 170);
  
  fill('rgb(255,221,227)');
  rect(170, 200, 50, 30);
  
  //arm
  fill('rgb(255,221,227)');
  noStroke();
  ellipse(110, 220, 70, 60); // Left arm
  ellipse(90, 250, 70, 60); // Left arm2
  ellipse(20, 330, 50, 50); // Left hand
  ellipse(280, 220, 70, 60); // Right arm
  ellipse(300, 250, 70, 60);// Right arm2
  ellipse(380, 330, 50, 50);// Right hand
 
 push(); 
  translate(350, 280); 
  rotate(45); 
   fill('rgb(255,221,227)');
  rect(-30, 0, 90, 30); 
  pop(); 
  
   push(); 
  translate(50, 320); 
  scale(1, -1); 
  rotate(45); 
  fill('rgb(255,221,227)'); 
  rect(-30, 0, 90, 30); 
  pop(); 
  
  
  //FACE
  fill(255, 230, 0); 
  noStroke();
  ellipse(200, 120, 200, 200); 

  fill(255); 
  ellipse(270, 110, 130, 170);

  noFill();
  stroke(0);
  strokeWeight(3);
  arc(150, 110, 40, 20, 0, 900); 
  
  fill(255, 150, 180);
  noStroke();
  ellipse(130, 150, 40, 20);
  
  fill(0); 
  textSize(40); 
  text("3", 170, 180); 
  
  // Draw skateboard 
  fill(50); // Dark color for the skateboard
  noStroke();
  rect(30, 520, 200, 40, 10); 
  
  fill(0); // Black color for the wheels
  ellipse(60, 570, 40, 40); // Left wheel
  ellipse(200, 570, 40, 40); // Right wheel
  
  //bird
  fill(255); 
  stroke(0); 
  strokeWeight(2);

  // body
  ellipse(200, 500, 40, 30); //body
  ellipse(210, 485, 20, 20); //head

  // beak
  line(215, 485, 225, 480); // beak 

  //legs
  line(195, 510, 195, 520); // Left leg
  line(205, 510, 205, 520); // Right leg

  // feet 
  line(195, 520, 190, 525); // Left foot
  line(195, 520, 200, 525); // Left foot 2
  line(205, 520, 200, 525); // Right foot
  line(205, 520, 210, 525); // Right foot 2
  
  
}

