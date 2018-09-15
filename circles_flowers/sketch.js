var genome1 = [
  50, 88, 50, // center
  17, 50, 152, 10, //1st row
  11, 50, 300, 20 //2nd row
]
var siz = 150
var seed

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
    colorMode(HSB, 360, 100, 100,100)
    seed = random(9999)
}

function draw() {

    randomSeed(seed)
    background(0, 0, 100);
    for (var i =0; i < (width-siz) / siz; i++) {
        for (var j =0; j < (height -siz/2) / siz; j++) {
            drawFlower(i * siz + siz/2, j * siz + siz/2, randomFlower());

        }
    }


}
function mousePressed(){
    seed = random(9999)
}
// enum type like way to adress arrays indexes
// this is usefull to deal with names instead of numbers and make the code below more readable
var centerSize = 0;
var centerFillHue = 1;
var centerOpacity = 2;

var firstNumber = 3;
var firstSize = 4;
var firstFillHue = 5;
var firstOpacity = 6;

var secondNumber = 7;
var secondSize = 8;
var secondFillHue = 9;
var secondOpacity = 10;

// a function to return a scaled value for each type of gene
function randomGene( index) {
  var result =0;
  if (index == centerSize || index == firstSize || index == secondSize) {
    result = random(15, 50); // it's a size param
  } else if (index == centerFillHue || index == firstFillHue || index ==secondFillHue) {
    result = random(0, 360); // it's a hue param
  } else if (index == centerOpacity || index == firstOpacity || index == secondOpacity) {
    result = random(5, 80); // it's an opacity param
  } else if (index == firstNumber || index == secondNumber ) {
    result = int(random(5, 25)); // it's a quantity param
  }
  return result;
}


// a function to return a new random genome
function randomFlower() {
    var result = [11];
    for (var i = 0; i < 11; i++) {
        result[i] = randomGene(i);
    }
    return result;
}

// draw a flower with a given genome
function drawFlower(xpos, ypos, genome) {

    push()
    translate(xpos, ypos);

    // first draw the second row (in the back)
    for (var i = 0; i < int(genome[secondNumber]); i++) {
        fill(genome[secondFillHue], 80, 100, genome[secondOpacity]);
        noStroke();

        var x = cos(i * (TWO_PI) / genome[secondNumber]) * genome[centerSize];
        var y = sin(i * (TWO_PI) / genome[secondNumber]) * genome[centerSize];
        var rad = genome[secondSize];
        ellipse(x, y, rad, rad);
    }
    // then the second one
    for (var i = 0; i < int(genome[firstNumber]); i++) {
        fill(genome[firstFillHue], 80, 100, genome[firstOpacity]);

        var x = cos(i * (TWO_PI) / genome[firstNumber]) * genome[centerSize] / 2;
        var y = sin(i * (TWO_PI) / genome[firstNumber]) * genome[centerSize] / 2;
        var rad = genome[firstSize];
        ellipse(x, y, rad, rad);
    }
    // finally the center
    fill(genome[centerFillHue], 80, 100, genome[centerOpacity]);
    ellipse(0, 0, genome[centerSize], genome[centerSize]);

    pop()
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
