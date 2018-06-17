
var seed = 160;

var siz = 35;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    rectMode(CORNER);
    seed = random(1000);


}


function draw() {

    background(0);
   randomSeed(seed);
    strokeWeight(4)
    stroke(255)

    for (var i = siz; i < windowWidth - siz; i += siz) {
        for (var j = siz; j < windowHeight - siz; j += siz) {
            push()
            var rd = random(100)
            if(rd <25){
                line(i,j,i,j+siz);
            }
            else if (rd > 25 && rd <50){
                line(i+siz,j,i+siz,j+siz);
            }
            else if (rd > 50 && rd <75){
                line(i,j,i+siz,j);
            }
            else if (rd > 25 && rd <50){
                line(i+siz,j+siz,i+siz,j+siz);
            }

            pop()
        }
    }
}

function mouseReleased() {

    seed = random(1000);
    siz = int(random(10, 50))

}

