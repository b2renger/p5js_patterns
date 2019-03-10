var slotSize = 125
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

    pg = createGraphics(slotSize, slotSize)
    pg.fill(0, 0, 0, 150)
    pg.noStroke()
    pg.ellipse(0, slotSize / 2, slotSize * 0.65, slotSize * 0.65)


    imageMode(CENTER)


}


function draw() {
    background(255)

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            //for (var i = 0; i < slotSize; i += step) {
            image(pg, x, y)
            //}

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            translate(x, y)
            rotate(PI)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetX, -slotSize * offsetY)
            // }

            pop()
        }

    }

    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            translate(x, y)
            rotate(PI / 2)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetX, -slotSize * offsetY)
            // }

            pop()
        }

    }


    for (var x = -slotSize * 5; x < width + slotSize * 5; x += slotSize * 1) {
        for (var y = -slotSize * 5; y < height + slotSize * 5; y += slotSize * 1) {
            push()

            translate(x, y)
            rotate(-PI / 2)

            // for (var i = 0; i < slotSize; i += step) {
            image(pg, -slotSize * offsetX, -slotSize * offsetY)
            // }

            pop()
        }

    }

    offsetX = map(mouseY, 0, width, -1, 1)
    offsetY = map(mouseX, 0, height, -1, 1)
}

function mouseReleased() {

    // offset = random(-1, 1)
    slotSize = int(random(2, 6)) * 25
    ellipseSize = random(0.125, 1)

    opacity = random(50, 200)

    console.log(slotSize, ellipseSize, opacity)

    pg = createGraphics(slotSize, slotSize)
    pg.fill(0, 0, 0, opacity)
    pg.noStroke()
    pg.ellipse(0, slotSize / 2, slotSize * ellipseSize, slotSize * ellipseSize)


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
