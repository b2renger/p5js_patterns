let slotSize = 150 ;
let marginX
let marginY
let seed

let pg

let lines = []

function setup() {

    createCanvas(windowWidth, windowHeight);

    pixelDensity(1)

    pg = createGraphics(slotSize, slotSize)
    pg.background(0)
    pg.smooth()
    rectMode(CENTER)
    imageMode(CENTER)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;

    lines.push(new Line(0))
    //console.log(lines.length)
    //frameRate(15)
    seed = random(999999)

}


function draw() {
    //frameRate(15)
    background(0)
    pg.background(0)
   
    console.log(lines.length)



    for (let i = 0; i < lines.length; i++) {
        if (lines.length < 2000) {
            lines[i].update()
        }
        lines[i].draw(pg)
    }

    randomSeed(seed)
    for (var x = marginX / 2 + slotSize / 2; x < width - marginX / 2; x += slotSize) {
        for (var y = marginY / 2 + slotSize / 2; y < height - marginY / 2; y += slotSize) {
            push()
            translate(x, y)
            
            rotate(int(random(4)) * PI / 2)
            image(pg, 0, 0)
            if (keyIsPressed){
                noFill()
                strokeWeight(2)
                stroke(255)
                rect(0, 0, slotSize, slotSize)
            }
            pop()
        }
    }

}

class Line {

    constructor(id) {
        randomSeed(seed +id*random(10000))
        // speed x and y
        //this.a = int(random(-20, 20)) / 10
        //this.b = int(random(-20, 20)) / 10

        // source x and y
        let r = random(1)
        if (r< 0.25){
            this.sx = random(slotSize)
            this.sy = 0
            this.a = int(random(-20,20))/10
            this.b = 1
        }
        else if (r>= 0.25 && r < 0.5){
            this.sx = random(slotSize)
            this.sy = slotSize
            this.a = int(random(-20,20))/10
            this.b = -1
        }
        else if (r >= 0.5 && r < 0.75){
            this.sx = 0
            this.sy = random(slotSize)
            this.a = 1
            this.b = int(random(-20,20))/10
        }
        else if (r >= 0.75 && r <1){
            this.sx = slotSize
            this.sy = random(slotSize)
            this.a = -1
            this.b = int(random(-20,20))/10
        }

       // this.sx = random(slotSize / 4, slotSize - slotSize / 4)
        //this.sy = random(slotSize / 4, slotSize - slotSize / 4)
        // destination x and y
        this.dx = this.sx
        this.dy = this.sy

        this.id = id
        this.active = true;

       // console.log(this.sx, this.sy)

    }

    update() {
        if (this.active) {
            for (let i = 0; i < lines.length; i++) {
                if (i != this.id) {
                    if (this.intersects(
                            lines[i].sx, lines[i].sy, lines[i].dx, lines[i].dy,
                            this.sx, this.sy, this.dx, this.dy)) {
                        lines.push(new Line(lines.length))
                        this.active = false;
                        console.log("intersect")
                        //seed = random(999999)
                    }

                }
            }
            if (this.overlap()) {
                lines.push(new Line(lines.length))
                this.active = false;
                console.log("overlap")
               // seed = random(999999)

            }
            this.dx += this.a
            this.dy += this.b
            //console.log(this.dx, this.dy)
        }

    }

    draw(pg) {
        // if (this.active) {
        pg.stroke(255)
        pg.strokeWeight(1)
        pg.line(this.sx, this.sy, this.dx, this.dy)
        //}
    }

    overlap() {
        let result = false
        if (this.dx < 0 || this.dx > slotSize || this.dy < 0 || this.dy > slotSize) {
            result = true
        }
        return result;
    }


    //https://stackoverflow.com/questions/9043805/test-if-two-lines-intersect-javascript-function
    intersects(a, b, c, d, p, q, r, s) {
        var det, gamma, lambda;
        det = (c - a) * (s - q) - (r - p) * (d - b);
        if (det === 0) {
            return false;
        } else {
            lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
            gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
            return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
        }
    };


}

function mouseReleased() {
    background(0)
    slotSize = int(random(5, 25)) * 10
    seed = random(999999)
    lines=[]
    pg = createGraphics(slotSize, slotSize)
    pg.background(0)
    pg.smooth()
    rectMode(CENTER)
    imageMode(CENTER)
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
    lines.push(new Line(0))


}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    marginX = windowWidth - int((windowWidth / slotSize)) * slotSize;
    marginY = windowHeight - int((windowHeight / slotSize)) * slotSize;
}