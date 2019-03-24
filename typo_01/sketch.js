let slotSize = 420;
let marginX
let marginY
let step = 6
let c = 'P'
let colorsfront = ["#fa86be",  "#9aebed", "#f6f5f5", "#3bb4c1"]
let colorsback = ["#a275e3", "#115173", "#048998", "#38598b"]

let c1
let c2

let fonts = ["Pacifico", "Shadows Into Light", "Source Code Pro", "Amatic SC", "Tangerine"]


function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)
    textSize(slotSize)
    textAlign(CENTER, CENTER)

    c1 = "#048998"
    c2 = "#9aebed"

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    textFont('Tangerine')

}


function draw() {

    background(c1)

    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
            push()
            textSize(slotSize / 4)
            textAlign(CENTER, CENTER)
            fill(c2)

            scale(1, 1)
            translate(x, y)

            for (let i = 0; i < TWO_PI; i += PI / step) {
                push()
                rotate(i)
                push()
                translate(map(mouseX, 0, width, slotSize / 5, -slotSize / 5), 0)
                rotate(map(mouseY, 0, height, 0, TWO_PI))
                text(c, 0, 0)
                translate(map(mouseX, 0, width, -slotSize / 5, slotSize / 5), 0)
                scale(-1, 1)
                text(c, 0, 0)
                pop()
                pop()
            }


            pop()
        }




    }


}

function keyTyped() {

    c = key
}

function mouseReleased() {
    slotSize = int(random(3, 9)) * 30
    step = int(random(1, 9))
    c1 = colorsback[int(random(colorsback.length))]
    c2 = colorsfront[int(random(colorsfront.length))]
    let f = fonts[int(random(fonts.length))]
    textFont(f)

    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    console.log(slotSize, step, c1,c2, f)

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}
