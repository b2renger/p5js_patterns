let slotSize = 100;
let marginX
let marginY
let step = 0.1


function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}


function draw() {

    background(255)
    for (let x = marginX / 2 + slotSize / 2; x < width - marginX/2 -slotSize ; x += slotSize) {
        for (let y = marginY / 2 + slotSize / 2; y < height - marginY/2 - slotSize ; y += slotSize) {

            for (let angle = 0; angle < TWO_PI; angle += PI * step) {

                push()
                translate(x+ slotSize/2 , y + slotSize/2 )
                line(0, 0, slotSize * cos(angle), slotSize * sin(angle))
                pop()
            }

        }
    }

}

function mouseReleased() {


    slotSize = int(random(1, 9))* 20
    step = random( 0.05, 0.6)


    console.log(slotSize, step)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
