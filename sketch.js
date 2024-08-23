function setup() {
    createCanvas(400, 400);
    background("#3F51B5");
  }
  
  function draw() {
    stroke("#FFEB3B");
    fill("rgb(0,0,0)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }
  