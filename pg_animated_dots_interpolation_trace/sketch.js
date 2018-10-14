// ajouter différents type de easings

var siz = 200;
var pg

var xnum
var ynum
var xoffset
var yoffset

var dots = [];
var angles = [];
var num = 512
var circleSize = 0.5
var animSpeed = 0.05

var seed
var prevIndex = 18
var index = 18
var doRotate = true


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(255);
    pixelDensity(1)

    seed = random(9999)


    pg = createGraphics(siz, siz)
    imageMode(CENTER)

    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2

    for (var i = 0; i < num; i++) {
        dots[i] = new Dot();

    }

    for (var i = 0; i < xnum * ynum; i++) {
        angles[i] = new Orientation();
    }
    index = int(random(19));
    prevIndex = index

    newConfiguration(index)

}


function draw() {

    randomSeed(seed)
    //background(255)
    //pg.background(255);

    for (var i = 0; i < num; i++) {
        dots[i].move();
        dots[i].draw(pg);
    }

    for (var j = 0; j < ynum; j += 1) {
        for (var i = 0; i < xnum; i += 1) {
            push()
            var index = i + j * (xnum);
            translate(xoffset + siz / 2 + i * siz, yoffset + siz / 2 + j * siz);

            if (doRotate) {
                var angle = int(random(5)) * PI / 2
                rotate(angle)
            } else {
                rotate(0)
            }


            image(pg, 0, 0);
            pop()
        }
    }

}

function mousePressed() {
    //siz = random(25,150)
    seed = random(9999)
    pg.background(255)
    if (random(1) < 0.75) {
        doRotate = true
    } else {
        doRotate = false
    }
    while (index == prevIndex) {
        index = int(random(19));
        //println(index);
        newConfiguration(index);
    }

    if (doRotate) {
        for (var i = 0; i < xnum * ynum; i++) {
            var angle = int(random(5)) * PI / 2
            angles[i].updateTarget(angle)
        }
    } else {
        for (var i = 0; i < xnum * ynum; i++) {
            angles[i].updateTarget(0)
        }
    }

    prevIndex = index

}

function keyPressed() {
    background(255)
    pg.background(255)
    seed = random(9999)
    siz = random(100, 350)
    pg = createGraphics(siz, siz)
    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2
    newConfiguration(index)
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);
    xnum = int((width / siz))
    ynum = int((height / siz))
    xoffset = (width - xnum * siz) / 2
    yoffset = (height - ynum * siz) / 2

}

class Orientation {

    constructor() {


        this.angle = 0;
        this.angleTarget = 0;
    }

    update() {

        this.angle += min((this.angleTarget - this.angle) * animSpeed, 10);
    }

    updateTarget(newAngle) {
        this.angleTarget = newAngle;

    }
}

class Dot {

    constructor() {

        this.xpos = random(siz);
        this.ypos = random(siz);
        this.xtarget = random(siz);
        this.ytarget = random(siz);
    }

    move() {

        this.xpos += min((this.xtarget - this.xpos) * animSpeed, 10);
        this.ypos += min((this.ytarget - this.ypos) * animSpeed, 10);
    }

    updateTarget(newX, newY) {
        this.xtarget = newX;
        this.ytarget = newY;

    }


    draw(pg, angle) {
        pg.push()
        pg.noStroke();
        pg.fill(0);
        pg.ellipse(this.xpos, this.ypos, circleSize, circleSize);
        pg.pop()
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

        case 8: // larme : http://www.mathcurve.com/courbes2d/larme/larme.shtml
            for (var i = 0; i < dots.length; i++) {
                var t = (i * TWO_PI) / dots.length;
                var xpos = siz / 2 + cos(t) * siz * 0.4
                var ypos = siz / 2 + sin(t) * pow(sin(t / 2), 1) * siz * 0.4
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 9: // kappa : http://www.mathcurve.com/courbes2d/kappa/kappa.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = TWO_PI * i / dots.length;
                var radius = tan(angle) * siz * 0.5

                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 10: // cubique d'agnesi : http://www.mathcurve.com/courbes2d/agnesi/agnesi.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, -PI / 2, PI / 2)
                var radius = siz * 0.5

                var xpos = siz / 2 + radius * tan(angle);
                var ypos = siz / 2 + radius * pow(cos(angle), 9);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 11: // lituus : http://www.mathcurve.com/courbes2d/lituus/lituus.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI * 2)
                var radius = sqrt(pow(siz * 0.5, 2) / angle)

                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 12: // torpille : http://www.mathcurve.com/courbes2d/torpille/torpille.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, PI)
                var radius = siz * 0.45 * cos(angle) * cos(2 * angle)

                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 13: // Limaçon trissecteur : http://www.mathcurve.com/courbes2d/limacon/limacontrisecteur.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI)
                var radius = siz * 0.15 * (1 + 2 * cos(angle))

                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 14: // trefle : http://www.mathcurve.com/courbes2d/trefle/trefle.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI)
                var radius = siz * 0.5 * (sin(2 * angle))

                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 15: // trisectrice de ceva : http://www.mathcurve.com/courbes2d/trisectricedeceva/trisectricedeceva.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI)
                var radius = siz * 0.10 * sin(3 * angle) / sin(angle)
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 16: // folium de durer : http://www.mathcurve.com/courbes2d/foliumdedurer/foliumdedurer.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI)
                var radius = siz * 0.5 * sin(angle / 2)
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 17: // Trèfle de Habenicht http://www.mathcurve.com/courbes2d/ornementales/ornementales.shtml
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, TWO_PI)
                var radius = (1 + cos(3 * angle) + pow(sin(3 * angle), 2)) * siz * 0.20
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;

        case 18:
            for (var i = 0; i < dots.length; i++) {
                var angle = map(i, 0, dots.length, 0, PI)
                var radius = siz * 0.5 * cos(2 * angle)
                var xpos = siz / 2 + radius * cos(angle);
                var ypos = siz / 2 + radius * sin(angle);
                dots[i].updateTarget(xpos, ypos);
            }
            break;


    }
}
