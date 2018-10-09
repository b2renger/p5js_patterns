var siz = 50;
var pg

var xnum
var ynum
var xoffset
var yoffset

var dots = [];
var num = 81
var circleSize = 1



function setup() {

    createCanvas(windowWidth, windowHeight);

    background(255);
    pixelDensity(1)


    pg = createGraphics(siz, siz)
    imageMode(CENTER)

    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2

    for (var i = 0; i < 81; i++) {
        dots[i] = new Dot();
    }
    newConfiguration(8)

}


function draw() {
    background(255)
    pg.background(255);

    for (var i = 0; i < dots.length; i++) {
        dots[i].move();
        dots[i].draw(pg);
    }

    for (var i = 0; i < xnum; i += 1) {
        for (var j = 0; j < ynum; j += 1) {
            image(pg, xoffset + siz / 2 + i * siz, yoffset + siz / 2 + j * siz);
        }
    }

}

function mousePressed() {
    //siz = random(25,150)
    var index = int(random(9));
    println(index);
    newConfiguration(index);
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2

}

class Dot {

    constructor() {

        this.xpos = random(siz);
        this.ypos = random(siz);
        this.xtarget = random(siz);
        this.ytarget = random(siz);
    }

    move() {
        this.xpos += min((this.xtarget - this.xpos) * 0.05, 10);
        this.ypos += min((this.ytarget - this.ypos) * 0.05, 10);
    }

    updateTarget(newX, newY) {
        this.xtarget = newX;
        this.ytarget = newY;
    }


    draw(pg) {
        pg.noStroke();
        pg.fill(0);
        pg.ellipse(this.xpos, this.ypos, circleSize, circleSize);
    }
}

function newConfiguration(id) {


    switch (id) {
        case 0: // lemniscate : http://www.mathcurve.com/courbes2d/lemniscate/lemniscategene.shtml
            for (var i = 0; i < dots.length; i++) {
                var t = (i * TWO_PI) / dots.length;
                var xpos = siz / 2 + siz * 0.25 * sin(t)
                var ypos = siz / 2 + siz * 0.25 * sin(t) * cos(t)
                dots[i].updateTarget(xpos, ypos);
            }
            break;
        case 1: // folium de descartes : http://www.mathcurve.com/courbes2d/foliumdedescartes/foliumdedescartes.shtml
            for (var i = 0; i < dots.length; i++) {
                var t = (i * PI) / dots.length;
                var r = siz * 0.25 * 3 * sin(t) * cos(t) / (pow(cos(t), 3) + pow(sin(t), 3))
                var xpos = siz / 2 + r * cos(t)
                var ypos = siz / 2 + r * sin(t)
                dots[i].updateTarget(xpos, ypos);
            }
            break;
        case 2: // circle
            for (var i = 0; i < dots.length; i++) {
                var radius = siz / 3;
                var angle = TWO_PI * i / dots.length;
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 3: // sinus
            for (var i = 0; i < dots.length; i++) {

                var xpos = map(i, 0, dots.length - 1, 0, siz);
                var ypos = siz / 2 + sin(TWO_PI * i / (dots.length - 1)) * siz * 0.4;
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 4: // sinus double fréquence
            for (var i = 0; i < dots.length; i++) {
                var xpos = map(i, 0, dots.length - 1, 0, siz);
                var ypos = siz / 2 + sin(2 * TWO_PI * i / (dots.length - 1)) * siz * 0.4;
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 5: // spirale
            for (var i = 0; i < dots.length; i++) {
                var radius = i * siz * 0.4 / dots.length;
                var angle = 2 * TWO_PI * i / dots.length;
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 6:
            for (var i = 0; i < dots.length; i++) {
                var t = (i * TWO_PI) / dots.length;
                var xpos = siz / 3 + (sin(pow(t, 0.5))) * (1 - cos(t)) * siz * 0.25;
                var ypos = siz / 2 + cos(t + PI / 4) * (1 + sin(t)) * siz * 0.25;
                dots[i].updateTarget(xpos, ypos);
            }
            break;


        case 7:
            for (var i = 0; i < dots.length; i++) {
                var t = (i * TWO_PI) / dots.length;
                var xpos = siz / 3 + cos(t) * (1 + cos(t)) * siz * 0.25;
                var ypos = siz / 2 + cos(t) * (1 + sin(t)) * siz * 0.25;
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 8: // larme
            for (var i = 0; i < dots.length; i++) {
                var t = (i * TWO_PI) / dots.length;
                var xpos = siz / 2 + cos(t) * siz * 0.4
                var ypos = siz / 2 + sin(t) * pow(sin(t/2), 2) * siz * 0.4
                dots[i].updateTarget(xpos, ypos);
            }
            break;
    }
}
