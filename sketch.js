let close = true;
let y = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //TOP EYELID
  fill('BLACK')
  rect(0,0,400,y)
  
  if(close == true) {
      y += 0.5
  }
  
  if(close == false) {
    y -= 0.5
  }
  
  if(y >= 200) {
    close = false
  }
  
  if(y <= 100) {
    close = true
  }

  fill(220)
  stroke(220)
  
  curveTightness(-1);
  curve(0,400-y,0,y,400,y,400,400-y)
  
  //BOTTOM EYELID
  fill('BLACK')
  rectMode(CORNERS);
  rect(0,400,400,400-y)
  
  fill(220)
  stroke(220)
  
  curve(0,y,0,400-y,400,400-y,400,y)

  
}