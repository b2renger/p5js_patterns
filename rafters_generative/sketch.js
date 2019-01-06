var slotSize = 100
var pg
var marginX
var marginY

var offsetX = 0.5

var offsetY = 0.5
var step = 10

function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)

    pg.stroke(0, 0, 255)
    pg.strokeWeight(10)
    pg.line(0, 0, +slotSize, 0)
    pg.line(0, 0, 0, +slotSize)

    imageMode(CENTER)


}


function draw() {
    background(255)

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 2) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 2) {
            push()

            for (var i = 0; i < slotSize; i += step) {
                image(pg, x + i, y + i)
            }

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 2) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 2) {
            push()

            translate(x, y)
            rotate(PI / 2)

            for (var i = 0; i < slotSize; i += step) {
                image(pg, i - slotSize * offsetY, i - slotSize * offsetX)
            }

            pop()
        }

    }
    offsetX = map(mouseX, 0, width, -1, 1)
    offsetY = map(mouseY, 0, height, -1, 1)
}

function mouseReleased() {

   // offset = random(-1, 1)
    step = int(random(2, 15))
    strokeW = 2 +random(5)
    opacity =random(100,255)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)

    pg.stroke(0, 0, 255,opacity)
    pg.strokeWeight(strokeW)
    pg.line(0, 0, +slotSize, 0)
    pg.line(0, 0, 0, +slotSize)


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
