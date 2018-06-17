var res = 0
var recursion = 8;


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);

    seed = random(1000);
    res = PI/2;

}


function draw() {

    background(0);
    randomSeed(seed)
    strokeWeight(0.15)
    stroke(255)
    fill(255,25)
    //noFill()
    push()
    translate(width/2,height/2)
    drawMe(400, res,recursion)
    pop()

}





function drawMe(sz, angle,level) {


    for (var i = 0; i < TWO_PI; i += angle) {
        rotate(i);

        push();
        beginShape();
        vertex(0 - sz, 0);
        vertex(0, 0 + sz * 2 / 3);
        vertex(0 + sz, 0);
        vertex(0, 0 + sz * 1 / 3);
        vertex(0 - sz, 0);
        endShape();
        pop();

    }

    if (level > 1){
        level -= 1;
        drawMe(sz-level*25, res, level)
    }
}


function mousePressed(){
    seed = random(10000)
    res = PI / (int(random(1,16))*2)
    recursion = int(random(1, 9))


}
