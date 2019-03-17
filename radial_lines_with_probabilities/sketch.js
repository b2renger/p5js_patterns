var slotSize = 100;
var marginX
var marginY
var step = 0.1
var seed
var prob = 0

function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)

    seed = random(9999)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function draw() {
    randomSeed( seed )
    background(255)
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX/2 -slotSize ; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY/2 - slotSize ; y += slotSize) {

            for (var angle = 0; angle < TWO_PI; angle += PI * step) {

                push()
                translate(x + slotSize / 2, y + slotSize / 2)
                if(random(1) > prob) line(0, 0, slotSize * cos(angle), slotSize * sin(angle))
                pop()
            }

        }
    }

}

function mouseReleased() {
    seed = random(9999)

    slotSize = int(random(1, 9))* 20
    step = random( 0.01, 0.5)
    prob = random(0, 0.75)

    console.log(seed, slotSize, step, prob)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
