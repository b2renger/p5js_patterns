var seed



function setup() {

    createCanvas(windowWidth, windowHeight);

    colorMode(HSB, 360, 100, 100, 100)
    background(0);
    pixelDensity(1)
    rectMode(CENTER)

    seed = random(9999)
    console.log(seed)



}


function draw() {

    randomSeed(seed)


    background(190, 5, 98);
    noStroke();
    noFill();
    var alpha = 25

    for (var i = 0; i < 7; i += 1) {

        var id = int(random(9))
        var hueVal = random(170, 300)

        if (id == 0) {
            if (random(1) > 0.5) {
                noStroke()
                fill(hueVal, random(10, 100), random(10, 100), alpha)
            } else {
                noFill()
                strokeWeight(random(0.5, 5))
                stroke(hueVal, random(10, 100), random(10, 100))
            }
            draw_ellipse_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), random(5, 110), random(1))
        } else if (id == 1) {
            if (random(1) > 0.5) {
                noStroke()
                fill(hueVal, random(10, 100), random(10, 100), alpha)
            } else {
                noFill()
                strokeWeight(random(0.5, 5))
                stroke(hueVal, random(10, 100), random(10, 100))
            }
            draw_rect_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), random(5, 110), random(5, 110), random(TWO_PI), random(1))
        } else if (id == 3) {
            noFill()
            strokeWeight(random(0.5, 5))
            stroke(hueVal, random(10, 100), random(10, 100))
            draw_cross_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), random(5, 110), random(5, 110), random(TWO_PI), random(1))
        } else if (id == 4) {
            noFill()
            strokeWeight(random(0.5, 5))
            stroke(hueVal, random(10, 100), random(10, 100))
            draw_line_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), random(5, 110), random(TWO_PI), random(1))
        } else if (id == 5) {
            if (random(1) > 0.5) {
                noStroke()
                fill(hueVal, random(10, 100), random(10, 100), alpha)
            } else {
                noFill()
                strokeWeight(random(0.5, 5))
                stroke(hueVal, random(10, 100), random(10, 100))
            }
            draw_tri_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), random(5, 110), random(TWO_PI), random(1))
        } else if (id == 6) {
            noFill()
            strokeWeight(random(0.5, 5))
            stroke(hueVal, random(10, 100), random(10, 100))
            // same eltwidth and eltHeight
            var s = random(10, 110)
            draw_cross_grid(random(TWO_PI), random(200, width - 200), random(200, height - 200), random(50, width), random(50, height), random(20, 100), s, s, random(TWO_PI), random(1))
        } else if (id == 7) {
            // superposed cross and ellipse
            var s = random(10, 110)
            var rot1 = random(TWO_PI)
            var xpos = random(200, width - 200)
            var ypos = random(200, height - 200)
            var w = random(50, width)
            var h = random(50, height)
            var spacing = random(20, 100)
            strokeWeight(random(0.5, 5))
            stroke(hueVal, random(10, 100), random(10, 100))
            draw_cross_grid(rot1, xpos, ypos, w, h, spacing, s, s, random(TWO_PI), random(1))
            if (random(1) > 0.5) {
                noStroke()
                fill(hueVal, random(10, 100), random(10, 100), alpha)
            } else {
                noFill()
                strokeWeight(random(0.5, 5))
                stroke(hueVal, random(10, 100), random(10, 100))
            }
            draw_ellipse_grid(rot1, xpos, ypos, w, h, spacing, s, random(1))
        } else if (id == 8) {
            if (random(1) > 0.5) {
                noStroke()
                fill(hueVal, random(10, 100), random(10, 100), alpha)
            } else {
                noFill()
                strokeWeight(random(0.5, 5))
                stroke(hueVal, random(10, 100), random(10, 100))
            }
            // superposed cross and ellipse
            var s = random(20, 110)
            var rot1 = random(TWO_PI)
            var xpos = random(200, width - 200)
            var ypos = random(200, height - 200)
            var w = random(50, width)
            var h = random(50, height)
            var spacing = random(20, 100)

            draw_ellipse_grid(rot1, xpos, ypos, w, h, spacing, s, random(1))
            draw_ellipse_grid(rot1, xpos, ypos, w, h, spacing, s * 2 / 3, random(1))
            draw_ellipse_grid(rot1, xpos, ypos, w, h, spacing, s * 1 / 3, random(1))
        }



    }
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
    console.log(seed)
}


function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}
