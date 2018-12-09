var repeat = 10;
var rectSize = 100;
var reduction = rectSize / repeat ;
var marginX
var marginY
var round = false
var cornerRad =0
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	rectMode(CENTER);
	pixelDensity(1)

	marginX = windowWidth - int((windowWidth / rectSize)) * rectSize ;
	marginY = windowHeight - int((windowHeight / rectSize)) * rectSize ;

}

function draw() {
	background(0);
	noFill()
	stroke(255)
	strokeWeight(0.5)

	if (round) {
		cornerRad  ++
		cornerRad = constrain(cornerRad, 0, rectSize/2)
	}
	else{
		cornerRad  --
		cornerRad = constrain(cornerRad, 0, rectSize/2)
	}

	for (var x = marginX /2 + rectSize /2 ; x < width  - marginX/2 ; x += rectSize){
		for (var y = marginY /2 + rectSize /2 ; y < height - marginY /2 ; y += rectSize){
			push()
			translate(x,y)

			for (var i =0 ; i < repeat ; i++){
				push()
				var offsetX = map(mouseX, 0, width , -rectSize/2, rectSize/2);
				var offsetY = map(mouseY, 0, height , -rectSize/2, rectSize/2);
				var offsetScale = map(i, 0, repeat , 0 , 1);
				var rotation = map(i , 0, repeat , 0, PI/2)
				translate(offsetX *offsetScale, offsetY*offsetScale)
				rotate(rotation)
				noStroke()
				var gray = map(i, 0, repeat, 100 ,255)
				fill(gray,75)
				rect (0,0  , rectSize - i*reduction , rectSize -i *reduction, cornerRad)
				pop()
			}
			pop()
		}
	}
}

function windowResized(){

	marginX = windowWidth - int((windowWidth / rectSize)) * rectSize ;
	marginY = windowHeight - int((windowHeight / rectSize)) * rectSize ;

}

function mousePressed(){
	round = !round;
}
