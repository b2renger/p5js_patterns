var slotWidth = 150;
var slotHeight = slotWidth * 1.4;
var marginX
var marginY

var dens = 8;

var pg1
var pg2

var c1 = "#f9989f"
var c2 = "#faf096"
var c3 = "#fccb8f"
var c4 = "#c5f8c8"


function setup() {

    createCanvas(windowWidth, windowHeight);


    pixelDensity(1)

    imageMode(CENTER)
    marginX = windowWidth - int((windowWidth / slotWidth)) * slotWidth;
    marginY = windowHeight - int((windowHeight / slotHeight)) * slotHeight;

    pg1 = createGraphics(slotWidth, slotHeight)
    pg2 = createGraphics(slotWidth, slotHeight)
    generatePG(pg1, c1, c2)
    generatePG(pg2, c3, c4)

}


function draw() {
    background(0)
    noStroke()
    for (var y = 0; y < height + slotHeight; y += slotHeight) {
        for (var x = 0; x < width + slotWidth; x += slotWidth) {
            push()
            translate(x, y)
            image(pg1, 0, 0)
            pop()
        }
    }

    for (var y = -slotHeight; y < height + slotHeight; y += slotHeight) {
        for (var x = -slotWidth; x < width + slotWidth; x += slotWidth) {
            push()
            translate(x + slotWidth / 2, y + slotHeight / 2)
            image(pg2, 0, 0)
            pop()
        }
    }

}

function generatePG(pg, ca, cb) {


    var index2 = 0
    for (var i = -slotWidth; i <= slotWidth; i += int(slotWidth / dens)) {
        index2++
        pg.push()
        pg.noStroke()
        if (index2 % 2 == 0) {
            pg.fill(ca)
        } else {
            pg.fill(cb)
        }
        pg.translate(slotWidth / 2, slotHeight / 2)
        pg.triangle(0, 0, i, -slotHeight, i + dens, -slotHeight)
        pg.triangle(0, 0, i, +slotHeight, i + dens, +slotHeight)
        pg.pop()
    }

}

function mouseReleased() {
    dens = int(random(2, 5) * 2)

    slotWidth = int(random(6, 25) * 2) * 5
    slotHeight = slotWidth * 1.6

    marginX = int(width - int((width / slotWidth)) * slotWidth);
    marginY = int(height - int((height / slotHeight)) * slotHeight);

    pg1 = createGraphics(slotWidth, slotHeight)
    pg2 = createGraphics(slotWidth, slotHeight)
    generatePG(pg1, c1, c2)
    generatePG(pg2, c3, c4)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotWidth)) * slotWidth;
    marginY = windowHeight - int((windowHeight / slotHeight)) * slotHeight;
}
