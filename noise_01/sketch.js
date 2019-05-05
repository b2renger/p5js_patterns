let slotSize = 100;
let marginX;
let marginY;
let time = 0
let seed = 123

let colors = ['#72d6c9','#ffc785', '#df7599', '#7189bf']

function setup() {

    createCanvas(windowWidth, windowHeight);


    pixelDensity(1);

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
    rectMode(CENTER)
    background(0)


}


function draw() {
    randomSeed(seed)
    //background(0)
    noFill();
    stroke(255,25)
    strokeWeight(0.15)
    time += 0.005;
    for (let i = marginX / 2 + slotSize / 2; i < width - marginX / 2; i += slotSize) {
        for (let j = marginY / 2 + slotSize / 2; j < height - marginY / 2; j += slotSize) {
            let c = colors[int(random(colors.length))]
           // alpha(c) = 25
            stroke(red(c), green(c), blue(c), 25)
            beginShape()
            for (let angle = 0 ; angle <= TWO_PI *2; angle = angle + PI * 0.05){
                let r = noise(time + i + j *10, cos(angle) , sin(angle) )* slotSize *0.5
                let xpos = i + cos(angle) *r
                let ypos = j + sin(angle) *r
                curveVertex(xpos,ypos)

            }
            endShape()
        }
    }
}

function mousePressed() {
    background(0)
    seed = random(9999)
    slotSize = random(50, 400)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}

function keyPressed(){
    background(0)
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
