var siz = 50;
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


    pg.fill(0)
    pg.noStroke(0)
    pg.triangle(0,pg.height*1/2,  pg.width*1/2, pg.height,0,pg.height )

    pg.ellipse(pg.width, 0, pg.width, pg.width)




    imageMode(CENTER,CENTER)

}


function draw() {
    randomSeed(seed)
    background(255);
    noStroke();
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
