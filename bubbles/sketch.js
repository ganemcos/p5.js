let bubble1;
let bubble2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bubble1 = new Bubble();
	bubble2 = new Bubble();
}

function draw() {
	background(200);
	bubble1.show();
	bubble1.move();
	bubble2.show();
	bubble2.move();
}

class Bubble{
	constructor(){
		this.x = width/2 ;
		this.y = height/2;
	}

 	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show(){
		stroke(255);
		strokeWeight(4);
		fill(100);
		ellipse(this.x,this.y,30,30,50);
	}
}
