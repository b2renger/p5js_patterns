var siz = 50;
var pg

var seed
function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)

    pg = createGraphics(siz+2,siz+2)

    pg.noFill()
    pg.stroke(255)
    pg.strokeWeight(4)
    pg.strokeCap(ROUND)
    pg.arc( pg.width/2, pg.height/2, pg.width,  pg.height, 0, PI/2);

    imageMode(CENTER,CENTER)

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
            var angle = TWO_PI * (int(random(1,5))) / 4
            rotate(angle)
            image(pg,0,0)

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
