var maxrec = 10;
var siz = 300
var seed = 1234
var spacingFactor = 1
var cam
var pg

function setup() {

    createCanvas(windowWidth, windowHeight, WEBGL);

    background(255);

    // initialisation de la position de notre camera
    cam = new EasyCam()

    pg = createGraphics(100, 100)
    pg.pixelDensity(1)
    pg.background(255)
    /*
    for (var i = 0 ; i < 5000; i++){
        pg.fill(random(255),10)
        pg.noStroke()
        pg.ellipse(random(pg.width),random(pg.height),5,5)
    }*/

    for (var i = 0; i < 1000; i++) {

        pg.noFill()
        pg.stroke(random(255), random(205, 220))
        pg.strokeWeight( 0.5)

        pg.ellipse(random(pg.width),random(pg.height),5,5)
    }

}


function draw() {

    background(200, 180, 180);
    randomSeed(seed)
    fill(0,0,55)
    stroke(0)
    cam.update()
    specularMaterial(250);


    pointLight(250, 220, 220, -width * 0.5, -height * 0.5, 500);
    pointLight(200, 200, 250, width * 0.5, -height * 0.5, 500);
    pointLight(250, 220, 220, -width * 0.5, height * 0.5, 500);
    pointLight(200, 200, 250, width * 0.5, height * 0.5, 500);



    //pass image as texture

    noStroke()

     push()
    translate(0,0,siz/2)
    fill(50)
    plane (3000)
    pop()
    specularMaterial(250);
    texture(pg);


    for (var i = -1000; i < 1000; i += siz) {
        for (var j = -1000; j < 1000; j += siz) {
            push()
            translate(i , j )
            var rec = int(random(maxrec)) + 1
            var originalSize = siz * spacingFactor
            for (var z = 0; z < rec; z++) {
                var newSize = originalSize - z * (originalSize / rec)
                translate(0, 0, originalSize / 2 * spacingFactor + newSize / 2 * spacingFactor)
                box(newSize * spacingFactor)
                //sphere(newSize* spacingFactor)
                //rotateX(PI/2*3)
                //cone(newSize* spacingFactor)
                //torus(newSize* spacingFactor,newSize)
                originalSize = newSize
            }
            pop()



        }
    }

}





function mousePressed() {
    siz = int(random(20, 90))*5

    //spacingFactor = 0.5 + random(0.5)
    maxrec = int(random(3, 15))
    seed = random(10000)
    background(0);
    marginX = windowWidth - int((windowWidth / siz)) * siz;
    marginY = windowHeight - int((windowHeight / siz)) * siz;




}

function windowResized() {
    background(0);
    resizeCanvas(windowWidth, windowHeight)
    marginX = windowWidth - int((windowWidth / siz)) * siz;
    marginY = windowHeight - int((windowHeight / siz)) * siz;
}



// appeler les fonction de EazyCam pour en fonction des actions de l'utilisateur
function mouseMoved() {
    cam.drag(mouseX, mouseY, pmouseX, pmouseY)
}

function mouseWheel(val) {
    // val.deltaY récupère la variation de déplacement à deux doigts
    // sur le touch pad de haut en bas
    cam.move(val.deltaY)
}

// une classe pour manipuler la caméra 3D avec la souris.
// maintenir cliqué et déplacer la souris pour regarder autour
// molette de la souris pour se rapprocher ou s'éloigner.
function EasyCam() {
    // 3 variables d'états + 3 cibles pour interpolation
    this.xrot = PI / 4
    this.yrot = -PI / 3
    this.zpos = 200
    this.xrotTarget = 0
    this.yrotTarget = 0
    this.zposTarget = -3000

    this.update = function () {
        // interpolation des varaibales d'état
        this.xrot += (this.xrotTarget - this.xrot) * 0.05
        this.yrot += (this.yrotTarget - this.yrot) * 0.05
        this.zpos += (this.zposTarget - this.zpos) * 0.1
        // orientation des dessin qui suiveront l'appel de cette fonction
        translate(0, 0, this.zpos);
        rotateX(this.xrot)
        rotateY(this.yrot)
    }

    this.resetCam = function () {
        this.xrot = PI / 4
        this.yrot = -PI / 3
        this.zpos = 0
        this.xrotTarget = PI / 4
        this.yrotTarget = -PI / 3
        this.zposTarget = 0
    }

    this.drag = function (x, y, px, py) {
        // changer la valeur de la cible en fonction du déplacement de la souris
        // en abscisses et en ordonées
        this.xrotTarget += (y - py) / 450;
        this.yrotTarget += (x - px) / 450;
    }

    this.move = function (val) {
        //changer la valeur de la position cible le long de l'axe z
        this.zposTarget += val
    }
}
