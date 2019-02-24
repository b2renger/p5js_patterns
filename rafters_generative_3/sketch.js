var slotSize = 50
var pg
var marginX
var marginY

var offsetX = 0.5

var offsetY = 0.5
var step = 11

function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)

    pg.stroke(0, 0, 255)
    pg.strokeWeight(15)

    pg.line(0, 0, slotSize, slotSize / 2)
    pg.line(slotSize, slotSize / 2, 0, slotSize)

    imageMode(CENTER)


}


function draw() {
    background(255)

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, x, y)
            //}

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            translate(x, y)
            //rotate(PI)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetY, -slotSize * offsetX)
            // }

            pop()
        }

    }
    /*
    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1.25) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1.25) {
            push()

            translate(x, y)
            rotate(-PI / 3)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetY, -slotSize * offsetX)
            // }

            pop()
        }

    }*/
    offsetX = map(mouseY, 0, width, -1, 1)
    offsetY = map(mouseX, 0, height, -1, 1)
}

function mouseReleased() {

    // offset = random(-1, 1)
    slotSize = int(random(1, 6)) * 25
    step = int(random(10, 50))
    strokeW = 1 + random(15)
    opacity = random(150, 255)

    console.log(slotSize, step, strokeW, opacity)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)
    pg.strokeWeight(strokeW)
    pg.stroke(0, 0, 255)
    pg.line(0, 0, slotSize, slotSize / 2)
    pg.line(slotSize, slotSize / 2, 0, slotSize)


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
