let bubble;
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	bubble = new Bubble();
	background(0);
	stroke(255);
	strokeWeight(4);
	bubble.show();
	bubble.move();
}

class Bubble{
	constructor(){
		this.x = width/2 ;
		this.y = height/2;
	}

	function move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	function show(){
		ellipse(this.x,this.y,30,30);
	}
}
