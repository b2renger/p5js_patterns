var siz = 150;
var seed = 160;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CENTER);

    seed = random(1000);


}


function draw() {

    background(0);
    randomSeed(seed)
    noFill()
    stroke(255)
    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {

            push()
            translate(i,j)
            rotate(random(TWO_PI))
            var rd = int(random(2,12));
            rect(0, 0, siz/2, siz/2);


            for (var k = 1 ; k <= rd ; k++){
                rotate(PI/rd)
                rect(0, 0, siz/2, siz/2);
            }


            pop();
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    siz = int(random(50, 300))
}
