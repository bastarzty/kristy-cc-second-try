function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  
  fill('#E0E0E0')
    strokeWeight(5);
  stroke('rgb(150,150,150)');
  
  rect(150, 150, 50, 200);
  

 translate(140,150);
  rotate(10);
     fill('#EBEBEB')
  ellipse(10, 1, 120, 90)
  
   resetMatrix(); 
  
  fill('#000000');
  strokeWeight(0);
  circle(150, 150, 10);
  

  rect(160, 145, 25, 10, 20);
  
 fill('#EEEEEE');
  strokeWeight(5);
  rect(70, 115, 35, 70, 15, 15, 15, 15);
  
  fill('#3F3F3F');  
  strokeWeight(0);
  rect(70, 125, 15, 40, 50, 50, 25, 25);
 

}