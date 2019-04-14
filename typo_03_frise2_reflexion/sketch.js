let slotSize = 100;
let marginX
let marginY
let step = 1
let c = '%'
let colorsfront = [ "#ffd3d3", "#fcffa5", "#fc7afa", "#8fbdf6"]
let colorsback = ["#1a3a51", "#5c134a", "#3c415e", "#00677e"]

let c1
let c2

let fonts = [ "Monoton", "East Sea  Dokdo", "Fascinate Inline ", "Righteous"]


function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)
    textSize(slotSize)
    textAlign(CENTER, CENTER)

    c1 = "#3c415e"
    c2 = "#ffd3d3"

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    textFont('Righteous')

}


function draw() {

    background(c1)


    for (var x = -slotSize / 2; x < width + slotSize; x += slotSize) {
        for (var y = -slotSize / 2; y < height + slotSize; y += slotSize) {
            push()
            textSize(slotSize /* map(mouseX, 0, width, 0.5, 1.5)*/)
            //textSize(slotSize)
            textAlign(CENTER, CENTER)
            fill(c2)
            translate(x,y)
            push()
            scale(1, 1)
            translate( map(mouseX, 0, windowWidth, -slotSize/2, slotSize/2), 0)
            rotate(map(mouseY, 0, height, 0, TWO_PI))
            text(c, 0, 0)
            pop()

            push()
            scale(-1, 1)
            translate( map(mouseX, 0, windowWidth, -slotSize/2, slotSize/2), 0)
            rotate(map(mouseY, 0, height, 0, TWO_PI))
            text(c, 0, 0)
            pop()


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
