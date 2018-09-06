
var seed


function setup() {

    createCanvas(windowWidth, windowHeight);

    background(0);
    pixelDensity(1)
    rectMode(CENTER)

    seed = random(9999)
    console.log(seed)

}


function draw() {
    randomSeed(seed)
    background(0);
    noStroke();
    noFill();

    strokeWeight(0.5)
    strokeCap(ROUND)
    stroke(0, 200, 255)
    draw_line_grid(0, 0, width, height, 25, 20, 0, 0.9)


    noStroke()


    fill(255, 100, 150)
    draw_ellipse_grid(50, 50, 800, 400, 25, 20, 0.86)
    strokeWeight(5)
    stroke(255, 255, 150)
    noFill()
    draw_rect_grid(150, 250, 500, 400, 25, 15, 10, PI / 4, 0.95)

    noFill()
    strokeWeight(1)
    stroke(200, 100, 222)
    draw_ellipse_grid(width - width / 2, height - 500, width / 2, 400, 40, 50, 1)
    strokeWeight(4)
    stroke(180, 180, 255)
    draw_cross_grid(width - 350, height - 500, width / 3, 500, 40, 25, 25, 0, 0.75)

    noStroke()
    fill(0, 255, 180)
    draw_tri_grid(200, 200, width - 400, height - 400, 75, 35, PI, 0.75)
    noFill()
    strokeWeight(1)
    stroke(0, 255, 180)
    draw_tri_grid(0, 0, width , height , 25, 15, PI/4, 0.05)

}

function draw_ellipse_grid(xpos, ypos, w, h, spacing, eltSiz, prob) {
    for (var i = xpos; i <= xpos + w; i += spacing) {
        for (var j = ypos; j <= ypos + h; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                ellipse(0, 0, eltSiz, eltSiz)
                pop()
            }
        }
    }
}

function draw_rect_grid(xpos, ypos, w, h, spacing, eltW, eltH, rot, prob) {
    for (var i = xpos; i <= xpos + w; i += spacing) {
        for (var j = ypos; j <= ypos + h; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                rect(0, 0, eltW, eltH)
                pop()
            }
        }
    }
}

function draw_cross_grid(xpos, ypos, w, h, spacing, eltW, eltH, rot, prob) {
    for (var i = xpos; i <= xpos + w; i += spacing) {
        for (var j = ypos; j <= ypos + h; j += spacing) {
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
}

function draw_line_grid(xpos, ypos, w, h, spacing, eltS, rot, prob) {
    for (var i = xpos; i <= xpos + w; i += spacing) {
        for (var j = ypos; j <= ypos + h; j += spacing) {
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
}

function draw_tri_grid(xpos, ypos, w, h, spacing, eltS, rot, prob) {
    for (var i = xpos; i <= xpos + w; i += spacing) {
        for (var j = ypos; j <= ypos + h; j += spacing) {
            if (random(1) < prob) {
                push()
                translate(i, j)
                rotate(rot)
                triangle(-eltS / 2, -eltS / 2, eltS / 2, eltS / 2, -eltS / 2, eltS / 2)
                pop()
            }
        }
    }

}

function mousePressed() {
    seed = random(9999)
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
