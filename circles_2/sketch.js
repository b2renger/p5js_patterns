var siz = 50;

//var colors = ["#363537","#EF2D56","#ED7D3A","#8CD867","#2FBF71"]
var colors = ["#eeeeee","#dddddd","#cccccc","#bbbbbb","#aaaaaa"]
var seed =0;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    seed = random(5000);
}


function draw() {
    randomSeed(seed);
    background(colors[int(random(colors.length))]);
    stroke(255);
    //fill(0);
    noFill();
    randomSeed(seed);

    for (var i = 0; i <= width; i += 150) {
        for (var j = 0; j <= height; j += 150) {
            for (var k = 0; k <15; k += 1) {
                noStroke();
                fill(colors[int(random(colors.length))]);

                ellipse(i, j, 150 - k*10, 150 - k*10);
            }
        }

    }
}


function mouseReleased(){

    seed = random(10000);
}



function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
