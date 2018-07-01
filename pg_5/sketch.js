var siz = 100;
var pg

var seed
function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)
    //colorMode(HSB)
    pg = createGraphics(siz,siz)
   // pg.colorMode(HSB)

    var startHue = 0
    var step = 30

    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, 0, 0, pg.width/2, 0  )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, pg.width/2, 0, pg.width, 0  )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, pg.width, 0 , pg.width, pg.height/2 )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, pg.width, pg.height/2, pg.width, pg.height )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, pg.width, pg.height, pg.width/2, pg.height )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2, pg.width/2, pg.height, 0, pg.height )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2,  0, pg.height, 0, pg.height/2 )

    startHue += step
    pg.fill(startHue)
    pg.stroke(startHue)
    pg.triangle(pg.width/2, pg.height/2,  0, pg.height/2,0,0 )




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
