var siz = 50;
var seed = 160;

var step = 0.05;
var phase = 0;
var randomseed = 123;



function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CORNER);
    seed = random(1000);
    round = random(siz / 2);
    randomSeed(randomseed);
}


function draw() {
    randomSeed(randomseed);
    background(0);
    seed += step;
    fill(255);


    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            var y = 0;

            var pulse = int(random(15))
            switch (pulse) {
                case 0:
                    y = pulse1(seed) * siz;
                    break;
                case 1:
                    y = pulse2(seed) * siz;
                    break;
                case 2:
                    y = pulse3(seed) * siz;
                    break;
                case 3:
                    y = pulse4(seed) * siz;
                    break;
                case 4:
                    y = pulse5(seed) * siz;
                    break;
                case 5:
                    y = pulse6(seed) * siz;
                    break;
                case 6:
                    y = pulse7(seed) * siz;
                    break;
                case 7:
                    y = pulse8(seed) * siz;
                    break;
                case 8:
                    y = pulse9(seed) * siz;
                    break;
                case 9:
                    y = pulse10(seed) * siz;
                    break;
                case 10:
                    y = pulse11(seed) * siz;
                    break;
                case 11:
                    y = pulse12(seed) * siz;
                    break;
                case 12:
                    y = pulse13(seed) * siz;
                    break;
                case 13:
                    y = pulse14(seed) * siz;
                    break;
                case 14:
                    y = pulse15(seed) * siz;
                    break;

            }

            rect(i, j, siz, y);
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    step = random(100) / 1000;
    randomseed = random(2000)
}

//https://codepen.io/soulwire/full/kqHxB

function pulse1(t) {
    return sin(t);
}

function pulse2(t) {
    return cos(t);
}

function pulse3(t) {
    return cos(t) * sin(t);
}

function pulse4(t) {
    return sin(t) * sin(t * 1.5);
}

function pulse5(t) {
    return sin(tan(cos(t) * 1.2));
}

function pulse6(t) {
    return sin(tan(t) * 0.05);
}

function pulse7(t) {
    return cos(sin(t * 3)) * sin(t * 0.2);
}

function pulse8(t) {
    return sin(pow(8, sin(t)));
}

function pulse9(t) {
    return sin(exp(cos(t * 0.8)) * 2);
}

function pulse10(t) {
    return sin(t - PI * tan(t) * 0.01);
}

function pulse11(t) {
    return pow(sin(t * PI), 12);
}

function pulse12(t) {
    return cos(sin(t) * tan(t * PI) * PI / 8);
}

function pulse13(t) {
    return sin(tan(t) * pow(sin(t), 10));
}

function pulse14(t) {
    return cos(sin(t * 3) + t * 3);
}

function pulse15(t) {
    return pow(abs(sin(t * 2)) * 0.6, sin(t * 2)) * 0.6;
}
