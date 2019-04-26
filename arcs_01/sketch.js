var slotSize = 200;
var marginX
var marginY

let col = ["#fa86be",  "#9aebed", "#f6f5f5", "#3bb4c1"]
let n = 10
let seed
function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
    seed = random(99999)
}


function draw() {
    background(0)
    randomSeed(seed)
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
            push()
            noFill()
            translate(x, y)
            n = int(map(mouseY, 0, windowHeight, 2, 40))
            strokeWeight(slotSize/(n*4))
            strokeCap(ROUND)
            //ellipse(x, y, slotSize, slotSize)
            for (let i = slotSize/n; i < slotSize; i += slotSize/n) {
                stroke(col[int(random(col.length))])
                rotate(map(mouseX + i*PI , 0, windowWidth, 0, TWO_PI))
                arc(0, 0, i, i, random(PI), random(PI, TWO_PI))
            }
            pop()
        }
    }

}

function mouseReleased() {
    seed = random(9999)
    slotSize = random(75, 400)
    n = int(random(3, 25))
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
