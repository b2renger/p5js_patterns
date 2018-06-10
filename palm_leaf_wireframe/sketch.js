var leaves;
var container_scale = 150;
var unit_scale = 0.5;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(100);  
  
  leaves = [];
  for (var i = container_scale ; i < windowWidth-container_scale/2  ; i +=container_scale){
    for (var j = container_scale+ container_scale/2 ; j < windowHeight-container_scale/2  ; j+= container_scale){
      leaves.push(new PalmLeaf(i,j,unit_scale));
       
    }
  }  
} 

function draw() {
  
  background(100)
  
  for (var i = 0 ; i < leaves.length ; i++){
    leaves[i].draw() 
  }
}


 
function PalmLeaf(x,y,s) {
  this.xpos  = x;
    this.ypos = y;
    this.scale = s;
    this.angle = -PI;
  
    this.draw = function(){
        push()
        translate(this.xpos, this.ypos); 
        rotate(this.angle);
        scale(this.scale)
        for(var i = -PI/4 ; i <= PI/4 ; i = i+ PI/15){
         push()
     noFill()
     rotate(i)
     beginShape()
     curveVertex(-1,-50)
     curveVertex(1,0)
     curveVertex(1,100)
     curveVertex(15,200)
     curveVertex(map(mouseX,0,windowWidth,40,-40),
                 map(mouseY,0,windowHeight,300,150))
     curveVertex(-15,200)
    // curveVertex(-1,100)
     //curveVertex(-1,0)
     endShape()
     pop()
    }
      pop()         
    }
}