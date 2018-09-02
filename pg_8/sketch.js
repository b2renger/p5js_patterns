var siz = 250;
var pg1
var pg2
var seed

function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000)
    // colorMode(HSB)

    pg1 = createGraphics(siz, siz)
    pg1.noStroke()
    pg1.fill(255)
    pg1.ellipse(0, 0, pg1.width * 24 / 10, pg1.width * 24 / 10)
    pg1.fill(0)
    pg1.noStroke(0)
    pg1.ellipse(0, 0, pg1.width * 20 / 10, pg1.width * 20 / 10)
    pg1.fill(50)
    pg1.ellipse(0, 0, pg1.width * 15 / 10, pg1.width * 15 / 10)
    pg1.fill(100)
    pg1.ellipse(0, 0, pg1.width * 10 / 10, pg1.width * 10 / 10)
    pg1.fill(150)
    pg1.ellipse(0, 0, pg1.width * 5 / 10, pg1.width * 5 / 10)
    pg1.fill(200)
    pg1.ellipse(0, 0, pg1.width * 2 / 10, pg1.width * 2 / 10)




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
            imageMode(CENTER)
            translate(i, j)
            var angle = TWO_PI * (int(random(1, 5))) / 4
            //var r = int(random(2))
            rotate(angle)
            //var hue = random(250, 360)
            image(pg1, 0, 0)
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
    pg1 = createGraphics(siz, siz)
    pg1.noStroke()
    pg1.fill(255)
    pg1.ellipse(0, 0, pg1.width * 24 / 10, pg1.width * 24 / 10)
    pg1.fill(0)
    pg1.noStroke(0)
    pg1.ellipse(0, 0, pg1.width * 20 / 10, pg1.width * 20 / 10)
    pg1.fill(50)
    pg1.ellipse(0, 0, pg1.width * 15 / 10, pg1.width * 15 / 10)
    pg1.fill(100)
    pg1.ellipse(0, 0, pg1.width * 10 / 10, pg1.width * 10 / 10)
    pg1.fill(150)
    pg1.ellipse(0, 0, pg1.width * 5 / 10, pg1.width * 5 / 10)
    pg1.fill(200)
    pg1.ellipse(0, 0, pg1.width * 2 / 10, pg1.width * 2 / 10)



}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
