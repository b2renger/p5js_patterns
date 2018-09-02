var siz = 100;
var pg1
var pg2
var seed

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)
    colorMode(HSB)
    pg1 = createGraphics(siz, siz)
    pg2 = createGraphics(siz, siz)
    // pg.colorMode(HSB)


    pg1.fill(0)
    pg1.noStroke(0)
    pg1.triangle(0, 0, pg1.width, 0, 0, pg1.height)
    pg1.triangle(pg1.width / 2, pg1.height / 2, pg1.width * 2 / 4, pg1.height, pg1.width, pg1.height * 2 / 4)

    pg2.fill(0)
    pg2.noStroke(0)
    pg2.triangle(0, 0, pg2.width, 0, 0, pg2.height)
    // pg2.triangle(pg.width/2,pg.height/2,  pg.width*2/4,pg.height,pg.width,pg.height*2/4 )




    imageMode(CENTER, CENTER)

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
            translate(i, j)
            var angle = TWO_PI * (int(random(1, 5))) / 4
            var r = int(random(2))
            rotate(angle)
            var hue = random(250, 360)
            fill(0)
            /*
            noStroke(0)
            triangle(0, 0, pg1.width, 0, 0, pg1.height)
            triangle(pg1.width / 2, pg1.height / 2, pg1.width * 2 / 4, pg1.height, pg1.width, pg1.height * 2 / 4)*/

            fill(hue, 100, 100)
            noStroke(hue, 100, 100)
            triangle(-siz/2, -siz/2,siz/2, -siz/2, siz/2, siz/2)


            /*
            if (r ==0)image(pg1,0,0)
            else image(pg2,0,0)*/

            pop()
        }

    }
}

function mouseReleased() {
    seed = random(50000)
    siz = random(5, 150)
}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
