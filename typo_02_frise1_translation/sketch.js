let slotSize = 100;
let marginX
let marginY
let step = 1
let c = 'A'
let colorsfront = [ "#fdc57b", "#fb3569", "#51eaea"]
let colorsback = ["#33313b", "#62374e", "#3c415e", "#115173"]

let c1
let c2

let fonts = ["Merriweather", "Monoton", "Rye"]


function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)
    textSize(slotSize)
    textAlign(CENTER, CENTER)

    c1 = "#33313b"
    c2 = "#fdc57b"

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    textFont('Monoton')

}


function draw() {

    background(c1)


    for (var x = -slotSize / 2; x < width + slotSize; x += slotSize) {
        for (var y = -slotSize / 2; y < height + slotSize; y += slotSize) {
            push()
            textSize(slotSize * map(mouseX, 0, width, 0.5, 1.5))
            //textSize(slotSize)
            textAlign(CENTER, CENTER)
            fill(c2)

            scale(1, 1)
            translate(x, y)
            rotate(map(mouseY, 0, height, 0, TWO_PI))
            text(c, 0, 0)
            for (let i = 1; i < step; i++) {

                text(c, i * slotSize / step, 0)
            }


            pop()
        }




    }


}

function keyTyped() {

    c = key
}

function mouseReleased() {
    slotSize = int(random(5, 25)) * 10
    step = int(random(1, 6))
    c1 = colorsback[int(random(colorsback.length))]
    c2 = colorsfront[int(random(colorsfront.length))]
    let f = fonts[int(random(fonts.length))]
    textFont(f)


    //slotSize = int(map(mouseX, 0, width, 3, 15))*10
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    console.log(slotSize, step, c1, c2, f)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
