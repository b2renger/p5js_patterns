var slotSize = 100;
var marginX
var marginY
var nb = 1
var rounded = 0
function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)
    rectMode(CENTER)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function draw() {
    background(0)
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
            push()
            translate(x, y)
            rotate(PI / 4)
            noFill()

            stroke(255)
            //noStroke()
            //fill(255,50)

            rect(0, 0, slotSize, slotSize, rounded)
            if(nb > 1) rect(0, 0, slotSize/1.25, slotSize/1.25, rounded)
            if(nb > 2) rect(0, 0, slotSize/1.5, slotSize/1.5, rounded)
            if(nb > 3) rect(0, 0, slotSize/2, slotSize/2, rounded)
            if(nb > 4) rect(0, 0, slotSize/3, slotSize/3, rounded)
            if(nb > 5) rect(0, 0, slotSize/4, slotSize/4, rounded)
            pop()
        }
    }

}

function mouseReleased() {

    slotSize = random(5, 50) * 5
    marginX = width - int((width / slotSize)) * slotSize;
    marginY = height - int((height / slotSize)) * slotSize;
    nb = int(random(7))
    strokeWeight(random(0.5, 5))
    rounded = int(random(slotSize/2))
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
