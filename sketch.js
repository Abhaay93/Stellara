function setup() {
    createCanvas(windowWidth, windowHeight);  // full screen
    background(0);                            // black background
    stroke(255);                              // white stroke
    strokeWeight(4);                          // line thickness
}

function draw() {
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);  // draw line from previous to current mouse
    }
}
