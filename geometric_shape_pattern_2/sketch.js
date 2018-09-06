
var seed



function setup() {

    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100,100)
    background(0);
    pixelDensity(1)
    rectMode(CENTER)

    seed = random(9999)
    console.log(seed)



}


function draw() {

    randomSeed(seed)


    background(255);
    noStroke();
    noFill();


    // big pink triangles bottom left
    noStroke()
    fill(342, 29, 90)
    draw_tri_grid(PI / 4, width / 4, height, height - 400, height - 400, 75, 75, PI , 1)

    // background light lines
    strokeWeight(0.55)
    strokeCap(ROUND)
    stroke(343, 24, 92 )
    draw_line_grid(PI, width / 2, height / 2, width, height, 25, 20, 0, 0.9)

    // blue cocentric ellipse top left
    noStroke()
    fill(216, 20, 90, 50)
    draw_ellipse_grid(PI / 4, 50, 50, 800, 400, 25, 20, 0.86)
    fill(216, 40, 90, 50)
    draw_ellipse_grid(PI / 4, 50, 50, 800, 400, 25, 15, 0.76)
    fill(216, 60, 90, 50)
    draw_ellipse_grid(PI / 4, 50, 50, 800, 400, 25, 5, 0.66)


    // green rectang grid
    strokeWeight(3)
    stroke(106, 17, 90)
    noFill()
    draw_rect_grid(PI / 2, width / 3, height / 2, 250, 250, 25, 15, 10, PI / 4, 0.95)

    // yellow big crosses in the middle
    strokeWeight(2)
    stroke(53, 41, 93)
    draw_cross_grid(PI / 2, width / 2, height / 2, width, 400, 40, 100, 100, PI, 0.25)
    // dark pink big circle middle right
    noFill()
    strokeWeight(0.75 )
    stroke(342, 29, 90)
    draw_ellipse_grid(PI / 2, width * 2 / 3, height / 2, width, 400, 40, 75 , 1)

    // light blue circles and crosses  right
    strokeWeight(3)
    stroke(216, 35, 93)
    draw_cross_grid(PI / 4, width - 350, height / 2, width / 3, 500, 40, 25, 25, 0, 0.75)
    draw_ellipse_grid(PI / 4, width - 350, height / 2, width / 3, 500, 40, 15, 0.75)

    // light green triangle all over
    noFill()
    strokeWeight(2)
    stroke(106, 22, 90)
    draw_tri_grid(PI, width / 2, height / 2, width, height, 25, 25, PI / 4, 0.05)

}

function draw_ellipse_grid(rot1, xpos, ypos, w, h, spacing, eltSiz, prob) {
    push()
    translate(xpos, ypos)
    rotate(rot1)
    for (var i = -w / 2; i <= +w / 2; i += spacing) {
        for (var j = -h / 2; j <= +h / 2; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                ellipse(0, 0, eltSiz, eltSiz)
                pop()
            }
        }
    }
    pop()
}

function draw_rect_grid(rot1, xpos, ypos, w, h, spacing, eltW, eltH, rot, prob) {
    push()
    translate(xpos, ypos)
    rotate(rot1)
    for (var i = -w / 2; i <= +w / 2; i += spacing) {
        for (var j = -h / 2; j <= +h / 2; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                rect(0, 0, eltW, eltH)
                pop()
            }
        }
    }
    pop()
}

function draw_cross_grid(rot1, xpos, ypos, w, h, spacing, eltW, eltH, rot, prob) {
    push()
    translate(xpos, ypos)
    rotate(rot1)
    for (var i = -w / 2; i <= +w / 2; i += spacing) {
        for (var j = -h / 2; j <= +h / 2; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                line(0, 0, -eltW / 2, -eltH / 2)
                line(0, 0, +eltW / 2, +eltH / 2)
                line(0, 0, -eltW / 2, +eltH / 2)
                line(0, 0, +eltW / 2, -eltH / 2)
                pop()
            }
        }
    }
    pop()
}

function draw_line_grid(rot1, xpos, ypos, w, h, spacing, eltS, rot, prob) {
    push()
    translate(xpos, ypos)
    rotate(rot1)
    for (var i = -w / 2; i <= +w / 2; i += spacing) {
        for (var j = -h / 2; j <= +h / 2; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                line(0, 0, -eltS / 2, -eltS / 2)
                line(0, 0, +eltS / 2, +eltS / 2)
                pop()
            }
        }
    }
    pop()
}

function draw_tri_grid(rot1, xpos, ypos, w, h, spacing, eltS, rot, prob) {
    push()
    translate(xpos, ypos)
    rotate(rot1)
    for (var i = -w / 2; i <= +w / 2; i += spacing) {
        for (var j = -h / 2; j <= +h / 2; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                triangle(-eltS / 2, -eltS / 2, eltS / 2, eltS / 2, -eltS / 2, eltS / 2)
                pop()
            }
        }
    }
    pop()
}

function mousePressed() {
    seed = random(9999)
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
