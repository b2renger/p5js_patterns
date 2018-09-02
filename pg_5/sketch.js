var siz = 50;
var pg

var seed

function setup() {

    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100, 100)
    background(0);
    pixelDensity(1)

    seed = random(5000)

    draw_pg()

    imageMode(CENTER, CENTER)

}


function draw() {
    randomSeed(seed)
    background(0);
    stroke(255);
    //fill(0);
    noFill();

    for (var i = 0; i <= width; i += siz) {
        for (var j = 0; j <= height; j += siz) {
            push()
            translate(i, j)
            var angle = TWO_PI * (int(random(1, 5))) / 4
            rotate(angle)
            image(pg, 0, 0)

            pop()
        }

    }
}

function mouseReleased() {
    seed = random(50000)
    siz = random(15, 75)

   draw_pg()

}

function draw_pg(){
    pg = createGraphics(siz, siz)
    pg.colorMode(HSB, 360, 100, 100, 100)
    pg.strokeWeight(2)
    pg.stroke(0)

    pg.fill(0, 50, 100)
    pg.rect(0, 0, pg.width / 2, pg.height / 2)


    pg.fill(90, 50, 100)
    pg.rect(pg.width / 2, 0, pg.width / 2, pg.height / 2)


    pg.fill(180, 50, 100)
    pg.rect(0, pg.height / 2, pg.width / 2, pg.height / 2)


    pg.fill(270, 50, 100)
    pg.rect(pg.width / 2, pg.height / 2, pg.width / 2, pg.height / 2)
}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
