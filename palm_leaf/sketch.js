var leaves;
var container_scale = 160;
var unit_scale = 0.5;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    leaves = [];
    for (var i = container_scale / 2; i < windowWidth; i += container_scale) {
        for (var j = container_scale ; j < windowHeight; j += container_scale) {
            leaves.push(new PalmLeaf(i, j, container_scale, unit_scale, 0.85, 15));
            leaves.push(new PalmLeaf(i, j, container_scale, unit_scale, 0.5, 5));


        }
    }

}

function draw() {

    background(0)

    for (var i = 0; i < leaves.length; i++) {
        leaves[i].draw()
    }
}



function PalmLeaf(x, y, rws, s, r, w) { // posx , posy, real-world-scale, unit_scale, ratio stem/leaf , leaf width
    this.xpos = x;
    this.ypos = y;
    this.real_world_scale = rws;
    this.scale = s;
    this.angle = -PI;
    this.c = color(255);
    this.ratio = r;
    this.wid = w;

    this.draw = function () {
        push()
        translate(this.xpos, this.ypos);
        rotate(this.angle);
        scale(this.scale)
        for (var i = -PI / 4; i <= PI / 4; i = i + PI / 20) {
            var length_offset = map(abs(i), PI / 4, 0, 0, container_scale * 0.75);
            push()
            fill(this.c)
            stroke(this.c)
            strokeWeight(0.5)
            rotate(i)
            beginShape()
            curveVertex(1, 0)
            curveVertex(1, container_scale * this.ratio)
            curveVertex(this.wid, container_scale + length_offset)
            curveVertex(map(mouseX, 0, windowWidth, this.wid + this.wid / 2, -this.wid - this.wid / 2),
                map(mouseY, 0, windowHeight, container_scale - container_scale / 2 + length_offset, container_scale + container_scale / 2 + length_offset))
            curveVertex(-this.wid, container_scale + length_offset)
            curveVertex(-1, container_scale * this.ratio)
            curveVertex(-1, 0)
            endShape(CLOSE)
            pop()
        }
        pop()
    }
}
