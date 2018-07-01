var siz = 50;
var pg

var seed
function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)

    pg = createGraphics(siz,siz)
    pg.background(0)
    pg.fill(255)
    pg.stroke(255)
    //pg.triangle(0, 0, pg.width/2, 0, 0, pg.height/2)
    pg.triangle( pg.width/2,0, pg.width, pg.height/2, 0, pg.height/2)

    imageMode(CENTER)

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
            translate(i,j)
            var angle = TWO_PI * (int(random(1,4))) / 4
            rotate(angle)
            image(pg,0,0,siz,siz)

            pop()
        }

    }
}

function mouseReleased(){
    seed = random(50000)

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
