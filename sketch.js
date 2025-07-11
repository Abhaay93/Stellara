let symmetry = 6;       // Number of symmetrical slices
let angleStep;          // Angle between each slice

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);  // Angle unit = degrees
    background(0);
    stroke(255);
    strokeWeight(2);
    angleStep = 360 / symmetry;
}

function draw() {
    translate(width / 2, height / 2);  // Center of canvas

    if (mouseIsPressed) {
        let mx = mouseX - width / 2;
        let my = mouseY - height / 2;
        let pmx = pmouseX - width / 2;
        let pmy = pmouseY - height / 2;

        for (let i = 0; i < symmetry; i++) {
            rotate(angleStep);
            line(mx, my, pmx, pmy);

            push();               // Mirror drawing
            scale(1, -1);
            line(mx, my, pmx, pmy);
            pop();
        }
    }
}
