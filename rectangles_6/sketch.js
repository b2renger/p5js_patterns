var slotSize = 100;
var marginX
var marginY

var yOffset = 4;
function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)
    rectMode(CENTER)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function draw() {
    background(0)
    var index = 0
    for (var y = -sqrt(2 * slotSize * slotSize) / 2; y < height + sqrt(2 * slotSize * slotSize); y += slotSize / yOffset) {
        index += 1
        for (var x = -sqrt(2 * slotSize * slotSize) / 2; x < width + sqrt(2 * slotSize * slotSize); x += sqrt(2 * slotSize * slotSize)) {


            push()
            if (index % 2 == 0) translate(sqrt(2 * slotSize * slotSize) / 2, 0)
            translate(x, y)
            rotate(PI / 4)
            noStroke()
            fill(32, 21, 55)
            rect(0, 0, slotSize, slotSize)
            fill(242, 215, 136)
            rect(0, 0, slotSize - slotSize * 1 / 5, slotSize - slotSize * 1 / 5)
            fill(193, 87, 37)
            rect(0, 0, slotSize - slotSize * 2 / 5, slotSize - slotSize * 2 / 5)
            fill(117, 12, 17)
            rect(0, 0, slotSize - slotSize * 3 / 5, slotSize - slotSize * 3 / 5)
            fill(7, 23, 57)
            rect(0, 0, slotSize - slotSize * 4 / 5, slotSize - slotSize * 4 / 5)
            pop()
        }
    }

}

function mouseReleased() {
    yOffset = random(1,5)
    slotSize = random(5, 50) * 5
    marginX = width - int((width / slotSize)) * slotSize;
    marginY = height - int((height / slotSize)) * slotSize;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
