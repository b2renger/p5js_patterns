var slotSize = 50;
var marginX
var marginY
var divisor = 16
var fillRatio = 0.75

function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function draw() {
    background(180, 180, 255)

    var rot = 0

    for (var y = marginY / 2 + slotSize / 2; y < height - marginY /2; y += slotSize) {
        for (var x = marginX / 2 + slotSize / 2; x < width - marginX /2 ; x += slotSize) {
            rot += PI / divisor;

            noStroke()
            fill(100, 100, 255)
            ellipse(x, y, slotSize *fillRatio, slotSize *fillRatio)
            strokeWeight(5)
            stroke(0)
            arc(x, y, slotSize *fillRatio, slotSize *fillRatio, rot - PI, rot)
            stroke(255)
            arc(x, y, slotSize *fillRatio, slotSize *fillRatio, rot, rot - PI)
        }
    }

}

function mouseReleased() {
    divisor = int(random(4, 16)) *2
    slotSize = random(40, 75);
    fillRatio = random(0.5, 0.90)


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
