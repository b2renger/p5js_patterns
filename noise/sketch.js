//https://p5js.org/reference/#/p5/noiseDetail
// add other noises ? https://github.com/jwagner/simplex-noise.js/blob/master/simplex-noise.js

let slotSize = 100;
let marginX
let marginY

let noiseF1
let noiseF2
let noiseS1
let noiseS2
let simplex = new SimplexNoise('seed')

let pg


function setup() {

    createCanvas(windowWidth, windowHeight);
    pg = createGraphics(windowWidth, windowHeight)
    pg.background(0)
    pixelDensity(1)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    noiseF1 = random(9999)
    noiseF2 = random(9999)
    noiseS1 = random(1, 100) / 50000
    noiseS2 = random(1, 100) / 10000

    pg.background('#cdffeb')
}


function draw() {

    noiseF1 = noiseF1 + noiseS1
    noiseF2 = noiseF2 + noiseS2

    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
            pg.push()
            pg.translate(x, y)


            let angle = simplex.noise3D(noiseF1, x, y) * TWO_PI * 2
            let radius = simplex.noise3D(noiseF2, x, y) * slotSize / 2
            let xpos = radius * cos(angle)
            let ypos = radius * sin(angle)
            pg.strokeWeight(0.1)
            pg.stroke('#009f9d')
            pg.line(0, 0, xpos, ypos)

            pg.pop()

        }
    }

    image(pg, 0, 0, windowWidth, windowHeight)

}

function mouseReleased() {
    pg.background('#cdffeb')
    slotSize = int(random(1, 8)) * 25
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    noiseF1 = random(9999)
    noiseF2 = random(9999)
    noiseS1 = random(1, 100) / 50000
    noiseS2 = random(1, 100) / 10000

}

function windowResized() {
    pg.background('#cdffeb')
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
