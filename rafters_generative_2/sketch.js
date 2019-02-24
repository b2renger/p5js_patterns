var slotSize = 100
var pg
var marginX
var marginY

var offsetX = 0.5

var offsetY = 0.5
var step = 25

function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)

    pg.stroke(0, 0, 255)
    pg.strokeWeight(2)
    for (var i = 0; i < slotSize; i += step) {
        pg.line(0, i, slotSize, +i)
    }

    imageMode(CENTER)


}


function draw() {
    background(255)

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1.25) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1.25) {
            push()

           // for (var i = 0; i < slotSize; i += step) {
                image(pg,  x, y)
            //}

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize *1.25) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize *1.25) {
            push()

            translate(x, y)
            rotate(PI / 3)

           // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetY,  - slotSize * offsetX)
           // }

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize *1.25) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize *1.25) {
            push()

            translate(x, y)
            rotate(-PI / 3)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg,-slotSize * offsetY,  - slotSize * offsetX)
           // }

            pop()
        }

    }
    offsetX = map(mouseX, 0, width, -1, 1)
    offsetY = map(mouseY, 0, height, -1, 1)
}

function mouseReleased() {

    // offset = random(-1, 1)
    slotSize = int(random(1, 5)) * 50
    step = int(random(10, 50))
    strokeW = 0.5 + random(5)
    opacity = random(50, 255)

    console.log(slotSize,step,strokeW,opacity)

    pg = createGraphics(slotSize, slotSize)
    pg.pixelDensity(1)

    pg.stroke(0, 0, 255,opacity)
    pg.strokeWeight(strokeW)
    for (var i = 0; i < slotSize; i += step) {
        pg.line(0, i, slotSize, +i)
    }


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
